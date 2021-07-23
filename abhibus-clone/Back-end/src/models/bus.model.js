const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
	{
		busTypeName: { type: String, required: true },
		travelerAgentName: { type: String, required: true },
		rating: { type: String, required: true },
		totalRating: { type: String, required: true },
		startTime: { type: String, required: true },
		arrivalTime: { type: String, required: true },
		travelTime: { type: String, required: true },
		discount:{type:String,required:true},
		price: { type: Number, required: true },
		availableSeats: { type: Number, required: true },
		available: { type: Boolean, requires: true },
		AC: { type:Boolean, required: true },
		NonAC: { type:Boolean, required: true },
		Volvo: { type:Boolean, required: true },
		Seater: { type:Boolean, required: true },
		Sleeper: { type: Boolean, required: true },
		cancelPolicy:{type:String,required:true}
	},
	{
		versionKey: false,
		timestamps: true,
	}
);
const Busdata = mongoose.model("bus", busSchema);
module.exports = Busdata;
