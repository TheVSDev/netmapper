// Imports
import { spawn } from "child_process"

import mw from "@/api/mw"
import auth from "@/api/middlewares/auth"

// handler function
const handler = mw({
  POST: [
    auth,
    async (req, res) => {
      const { ip, scanOption, options } = req.body

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

        res.send({ result })

        return
      } catch (err) {
        res.send({ error: err })

        return
      }
    },
  ],
})

export default handler
