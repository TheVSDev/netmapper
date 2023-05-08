import mongoose from "mongoose"
import UserSchema from "@/db/schemas/UserSchema"

const UserModel = mongoose.model('users', UserSchema);

export default UserModel