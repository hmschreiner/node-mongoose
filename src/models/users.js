import Mongoose from 'mongoose'

const UserSchema = new Mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, required: true },
}, {
    timestamps: { createdAt: true, updatedAt: true },
})

const UserModel = Mongoose.model('Users', UserSchema)

export default UserModel