import mongoose from "mongoose";
const { Schema } = mongoose;

const procedure = new Schema({
  procedureName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  clinic: {
    type: mongoose.Types.ObjectId,
    ref: "Clinic",
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

export default mongoose.model("Procedure", procedure);
