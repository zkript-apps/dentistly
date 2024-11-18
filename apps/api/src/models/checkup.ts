import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const checkup = new Schema({
  clinic: {
    type: mongoose.Types.ObjectId,
    ref: "Clinic",
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["Unpaid", "Paid", "Partially Paid"],
    required: true,
  },
  findings: {
    type: String,
    require: false,
  },
  procedure: {
    type: mongoose.Types.ObjectId,
    ref: "Procedure",
  },
  patient: {
    type: mongoose.Types.ObjectId,
    ref: "Patient",
  },
  createdAt: {
    type: Date,
    require: false,
  },
  updatedAt: {
    type: Date,
    require: false,
  },
  deletedAt: {
    type: Date,
    require: false,
  },
});

export default mongoose.model("Checkup", checkup);
