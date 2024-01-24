import mongoose from "mongoose";

const { Schema } = mongoose;

const operations = new Schema({
  clinic: {
    type: mongoose.Types.ObjectId,
    ref: "Clinic",
  },
  operationName: {
    type: String,
    required: true,
  },
  actions: {
    type: String,
    enum: ["Create", "Read", "Update", "Delete"],
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

export default mongoose.model("Operations", operations);
