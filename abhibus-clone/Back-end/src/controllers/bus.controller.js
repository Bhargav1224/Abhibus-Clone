const express = require("express");

const Busdata = require("../models/bus.model");
const router = express.Router();

//Posting data to bus collection ---------------
router.post("/", async (req, res) => {
	try {
		const busdata = await Busdata.create(req.body);
		return res.status(200).json({ data: busdata });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

//-------------Fetching all buses data--------------------
router.get("/", async (req, res) => {
	try {
		const busdata = await Busdata.find()

			.lean()
			.exec();
		return res.status(200).json({ data: busdata });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

//-------------Sorting Price in Descending order----------------
router.get("/price", async (req, res) => {
	try {
		// sort in descending (-1) order

		const busdata = await Busdata.find().sort({ price: -1 }).lean().exec();
		return res.status(200).json({ data: busdata });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

//-------------Sorting Rating in Descending order----------------
router.get("/rating", async (req, res) => {
	try {
		// sort in descending (-1) order

		const busdata = await Busdata.find().sort({ rating: -1 }).lean().exec();
		return res.status(200).json({ data: busdata });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

//-------------Sorting availableSeats in Descending order----------------
router.get("/seats", async (req, res) => {
	try {
		// sort in descending (-1) order

		const busdata = await Busdata.find().sort({ availableSeats: -1 }).lean().exec();
		return res.status(200).json({ data: busdata });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

//-------------Sorting Departure time in Descending order----------------
router.get("/departuretime", async (req, res) => {
	try {
		// sort in descending (-1) order

		const busdata = await Busdata.find().sort({ startTime: -1 }).lean().exec();
		return res.status(200).json({ data: busdata });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});


//-------------Sorting Arrival time in Descending order----------------
router.get("/arrivaltime", async (req, res) => {
	try {
		// sort in descending (-1) order

		const busdata = await Busdata.find().sort({ arrivalTime: -1 }).lean().exec();
		return res.status(200).json({ data: busdata });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

//--------Fetching individual bus date ---------------
router.get("/:id", async (req, res) => {
	try {
		const busdata = await Busdata.findById(req.params.id).lean().exec();
		return res.status(200).json({ data: busdata });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

module.exports = router;
