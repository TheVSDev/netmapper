const { Schema } = require("mongoose")

const RegisteredUserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { _id: false }
)

export default RegisteredUserSchema
