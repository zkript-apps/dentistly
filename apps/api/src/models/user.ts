import mongoose from "mongoose";
const { Schema } = mongoose;

const user = new Schema({
	clinic: {
		type: mongoose.Types.ObjectId,
		ref: "Clinic",
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ["Owner", "Admin", "User"],
		default: "User",
	},
	password: {
		type: String,
		required: true,
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
	registrationType: {
		type: String,
		enum: ["Google", "Facebook"],
	},
});

export default mongoose.model("User", user);
