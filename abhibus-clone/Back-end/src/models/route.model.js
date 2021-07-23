const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const routesSchema = new Schema({
	departureLocation: {
		type: String,
		required: true,
	},
	arrivalLocation: {
		type: String,
		required: true,
	},
	journeyDate: {
		type: String,
		required: true,
	},
	boardingPoints: [
		{
			type: String,
			required: true,
		},
	],
	droppingPoint: [
		{
			type: String,
			required: true,
		},
	],

	buses: [{ type: mongoose.Schema.Types.ObjectId, ref: "bus", required: true }],
});

module.exports = mongoose.model("route", routesSchema);
