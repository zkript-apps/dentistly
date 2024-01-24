import mongoose from "mongoose";
const { Schema } = mongoose;

const appointment = new Schema({
  clinic: {
    type: mongoose.Types.ObjectId,
    ref: "Clinic",
  },
  procedure: {
    type: mongoose.Types.ObjectId,
    ref: "Procedure",
  },
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: Number,
    enum: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 25, 26, 27, 28, 29,
    ],
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Declined"],
    required: false,
  },
  declineReason: {
    type: String,
    required: false,
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
});

export default mongoose.model("Appointment", appointment);
