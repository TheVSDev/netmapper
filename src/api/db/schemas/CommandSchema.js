import { Schema } from "mongoose"
import RegisteredUserSchema from "@/api/db/schemas/RegisteredUserSchema"

const CommandSchema = new Schema(
  {
    ip: {
      type: String,
      required: true,
    },

    options: [{ type: String }],

    result: {
      type: String,
      required: true,
    },

    user: {
      type: RegisteredUserSchema,
      required: true,
    },
  },
  { timestamps: true }
)

export default CommandSchema
