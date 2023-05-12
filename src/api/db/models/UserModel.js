import mongoose from "mongoose"
import UserSchema from "@/api/db/schemas/UserSchema"

const UserModel = mongoose.model('users', UserSchema);

export default UserModel