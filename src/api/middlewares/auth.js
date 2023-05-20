// Imports
import jsonwebtoken from "jsonwebtoken"
import config from "@/api/config.js"
import UserModel from "@/api/db/models/UserModel.js"

// auth function
const auth = async (req, res, next) => {
  const { authorization } = req.headers

  // If they don't have the authorization send the 403 status
  if (!authorization) {
    res.status(403).send({ error: "Forbidden" })

    return
  }

  try {
    const { payload } = jsonwebtoken.verify(
      authorization,
      config.security.jwt.secret
    )
    // Quering the DB to find the user
    const user = await UserModel.findOne({ _id: payload.userId })

    if (!user) {
      res.status(403).send({ error: "Forbidden" })

      return
    }

    req.user = user

    await next()
  } catch (err) {
    if (err instanceof jsonwebtoken.JsonWebTokenError) {
      res.status(403).send({ error: "Forbidden" })

      return
    }

    // eslint-disable-next-line no-console
    console.error(err)

    res.status(500).send({ error: "Oops. Something wrong." })
  }
}

export default auth
