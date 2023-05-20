// Imports
import mw from "@/api/mw.js"
import hashPassword from "@/api/utils/hashPassword.js"
import UserModel from "@/api/db/models/UserModel.js"

// handler function
const handler = mw({
  POST: [
    async (req, res) => {
      const { username, email, password } = req.body
      const passwordHash = hashPassword(password)

      await UserModel.create({ username, email, passwordHash })

      res.send({ result: true })
    },
  ],
})

export default handler
