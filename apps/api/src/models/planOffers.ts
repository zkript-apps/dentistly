import mongoose, { Schema } from "mongoose";

const actionsEnum = ["Create","Read", "Update", "Delete"]
const planOffers = new Schema({
  table: {
    type: String,
    validate: {
      validator: async function (value:string) {
        const modelExists = mongoose.modelNames().includes(value);
        return modelExists;
      },
      message: "Invalid model name, must be an existing schema name",
    },
    required: true,
  },
  action: {
    type: String,
    enum:actionsEnum
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

planOffers.index({table:1,action:1},{unique:true})

export default mongoose.model("PlanOffers", planOffers);