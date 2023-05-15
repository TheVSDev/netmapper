// Imports
import { spawn } from "child_process"

import mw from "@/api/mw"
import auth from "@/api/middlewares/auth"
import CommandModel from "@/api/db/models/CommandModel"

// handler function
const handler = mw({
  POST: [
    auth,
    async (req, res) => {
      const { ip, scanOption, options } = req.body
      const user = req.user

      // Initializing option arrays for storing options
      let allOptions = []
      let commandOptions = []

      // Pushing scanOption to option arrays
      if (scanOption) {
        allOptions.push(scanOption)
        commandOptions.push(scanOption)
      }

      Object.entries(options).forEach(([optionName, optionValue]) => {
        if (optionValue !== "" && optionValue) {
          const option = `--${optionName.replace(
            /[A-Z]/g,
            (match) => "-" + match.toLowerCase()
          )}`
          // Pushing options into option arrays
          allOptions.push(option)
          commandOptions.push(option)
          commandOptions.push(optionValue)
        }
      })

      // Scanning
      const scanResult = new Promise((resolve, reject) => {
        const nmap = spawn("nmap", [commandOptions, ip].flat())
        let result = ""

        nmap.stdout.on("data", (data) => {
          result += data.toString()
        })

        nmap.on("close", (code) => {
          code === 0 ? resolve(result) : reject(`Error ${code}`)
        })
      })

      try {
        const result = await scanResult

        // Creating DB model from scan result
        const command = await CommandModel.create({
          ip,
          options: allOptions,
          result,
          user: { id: user._id, username: user.username },
        })

        res.send({ result: command })

        return
      } catch (err) {
        res.send({ error: err })

        return
      }
    },
  ],
  GET: [
    auth,
    async (req, res) => {
      const user = req.user

      // Quering the DB for CommandModel and sorting it
      const history = await CommandModel.find({
        "user.id": user._id,
        "user.username": user.username,
      }).sort({ createdAt: -1 })

      res.send({ result: history })
    },
  ],
})

export default handler
