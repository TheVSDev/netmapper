import mongoose from "mongoose"
import CommandSchema from "@/api/db/schemas/CommandSchema"

const CommandModel = mongoose.modelNames().includes("Command")
  ? mongoose.model("Command")
  : mongoose.model("Command", CommandSchema)

export default CommandModel
