import mw from "@/api/mw"
import UserModel from "@/api/db/models/UserModel"

const handler = mw({
  GET: [
    async (req, res) => {
      const { userId } = req.query

      const user = await UserModel.findOne({ _id: userId })

      if (!user) {
        res.status(404).send({ error: "Not found" })
      }

      res.send({ result: user })
    },
  ],
})

export default handler
