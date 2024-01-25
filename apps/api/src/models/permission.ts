import mongoose from "mongoose"
const { Schema } = mongoose

const permission = new Schema({
    clinic: {
        type: mongoose.Types.ObjectId,
        ref: 'Clinic',
        required: true
    },
    operation: {
        type: mongoose.Types.ObjectId,
        ref: 'Operation',
        required: true
    },
    createdAt: {
        type: Date,
        required: false
    },
    updatedAt: {
        type: Date,
        required: false
    },
    deletedAt: {
        type: Date,
        required: false
    }
});

export default mongoose.model('Permission', permission)
