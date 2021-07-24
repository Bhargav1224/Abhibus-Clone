const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema(
	{
		email: { type: String, required: true },
		mobile: { type: Number, required: true },
		emergency_Contact: { type: Number, required: true },
		name: { type: String, required: true },
		age: { type: Number, required: true },
		gender: { type: String, required: true },
	
	},
	{
		versionKey: false,
		timestamps: true,
	}
);
const Passenger = mongoose.model("passenger", passengerSchema);
module.exports = Passenger;
