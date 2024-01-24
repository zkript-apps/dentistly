import mongoose, { Schema } from "mongoose";

const clinicBranch = new Schema({
    branchName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    clinic: {
        type: mongoose.Types.ObjectId,
        ref: 'Clinic'
    },
    createdAt: {
        type: Date,
        required: false,
    },
    updatedAt: {
        type: Date,
        required: false,
    },
    deletedAt: {
        type: Date, 
        required: false,
    },
})

export default mongoose.model('ClinicBranch', clinicBranch)