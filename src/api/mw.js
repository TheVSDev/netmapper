// Imports
import mongoose from "mongoose"
import config from "@/api/config.js"
import log from "@/api/middlewares/log.js"

// mw function
const mw = (handlersByMethod) => async (req, res) => {
  const { method } = req
  const handlers = handlersByMethod[method]

  if (!handlers) {
    res.status(404).send({ error: "Page not found" })

    return
  }

  // Connecting to DB
  await mongoose.connect(config.db.uri)

  try {
    let handlerIndex = 0
    const next = async () => {
      const handler = handlers[handlerIndex]
      handlerIndex += 1

      await handler(req, res, next)
    }

    await log(req, res, next)
  } finally {
    // Disconnecting from DB
    await mongoose.disconnect()
  }
}

export default mw
