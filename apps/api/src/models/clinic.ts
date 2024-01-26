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
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dayOff: dayOffs,
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
});

export default mongoose.model("Clinic", clinic);
