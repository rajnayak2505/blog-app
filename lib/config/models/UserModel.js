import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    googleId: {
        type: String,
    },
    date: {
        type: Date,
        default:Date.now,
    }
})

const models = mongoose.models || {};
const UserModel = models.user || mongoose.model("user", UserSchema);

export default UserModel;