import mongoose from "mongoose";

const { Schema } = mongoose;

const operation = new Schema({
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
  operation: {
    type: mongoose.Types.ObjectId,
    ref: "Permission",
    required: true,
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

export default mongoose.model("Operation", operation);
