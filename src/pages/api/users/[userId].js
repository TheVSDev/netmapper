// Imports
import mw from "@/api/mw"
import UserModel from "@/api/db/models/UserModel"

// handler function
const handler = mw({
  GET: [
    async (req, res) => {
      const { userId } = req.query
      // Quering the DB to find the user
      const user = await UserModel.findOne({ _id: userId })

      if (!user) {
        res.status(404).send({ error: "Page not found" })
      }

      res.send({ result: user })
    },
  ],
})

export default handler
