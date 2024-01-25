import mongoose from "mongoose"
const { Schema } = mongoose

// User Schema
const user = new Schema({
    clinic: {
        type: mongoose.Types.ObjectId,
        ref: "Clinic",
        required: true,
    },
    roles: {
        type: String,
        enum: ['Admin', 'Manager'],
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        require: false
    },
    updatedAt: {
        type: Date,
        require: false
    },

    deletedAt: {
        type: Date,
        require: false
    }
})

export default mongoose.model('User', user)