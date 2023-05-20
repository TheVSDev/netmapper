// Imports
import auth from "@/api/middlewares/auth"
import mw from "@/api/mw"
import CommandModel from "@/api/db/models/CommandModel"

// handler function
const handler = mw({
  GET: [
    auth,
    async (req, res) => {
      const { commandId } = req.query
      const user = req.user

      if (!user) {
        res.status(403).send({ result: "Forbidden" })

        return
      }

      // Quering the DB to find the command
      try {
        const command = await CommandModel.findOne({
          _id: commandId,
          "user.id": user._id,
          "user.username": user.username,
        })

        if (!command) {
          res.status(404).send({ error: "Not found!" })

          return
        }

        res.send({ result: command })
      } catch (err) {
        res.status(404).send({ error: "Not Found" })

        return
      }
    },
  ],
})

export default handler
