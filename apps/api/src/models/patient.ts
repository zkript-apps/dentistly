import mongoose from "mongoose";
const { Schema } = mongoose;

const contactInfo = new Schema({
  name: String,
  contactNumber: String,
  relationship: String,
});

const patient = new Schema({
  lastName: String,
  firstName: String,
  middleName: String,
  DoB: {
    type: Date,
    require: true,
  },
  age: Number,
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  address: String,
  status: {
    type: String,
    enum: ["Pending", "Approved", "Declined"],
  },
  clinic: {
    type: mongoose.Types.ObjectId,
    ref: "Clinic",
  },
  relativesContactInfo: contactInfo,
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

export default mongoose.model("Patient", patient);
