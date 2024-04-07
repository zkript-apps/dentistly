import mongoose, { Schema } from "mongoose";

const dayOffs = new Schema({
  day: {
    type: String,
    required: true,
  },
  timeRanges: {
    type: String,
    required: true,
  },
});

const clinic = new Schema({
  clinicName: {
    type: String,
    unique: true,
    required: true,
  },
  address: {
    type: String,
  },
  dayOff: dayOffs,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: Date,
  deletedAt: Date,
});

export default mongoose.model("Clinic", clinic);
