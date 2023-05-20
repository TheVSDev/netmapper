// Imports
import jsonwebtoken from "jsonwebtoken"

import config from "@/api/config.js"
import UserModel from "@/api/db/models/UserModel.js"
import hashPassword from "@/api/utils/hashPassword.js"
import mw from "@/api/mw.js"

// handler function
const handler = mw({
  POST: [
    async (req, res) => {
      const { username, password } = req.body
      const passwordHash = hashPassword(password)
      const user = await UserModel.findOne({ username })

      if (!user || user.passwordHash !== passwordHash) {
        res.status(401).send({ error: "Invalid credentials" })

        return
      }

      const sessionToken = jsonwebtoken
        .sign(
          {
            payload: {
              userId: user._id,
            },
          },
          config.security.jwt.secret,
          { expiresIn: config.security.jwt.expiresIn }
        )
        .toString("hex")

      res.send({ result: sessionToken })
    },
  ],
})

export default handler
