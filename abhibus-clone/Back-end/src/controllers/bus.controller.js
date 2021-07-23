const express = require("express");

const Busdata = require("../models/bus.model");
const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const busdata = await Busdata.create(req.body);
		return res.status(200).json({ data: busdata });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

router.get("/", async (req, res) => {
	try {
		const busdata = await Busdata.find()
			.populate("routes")
			.lean()
			.exec();
		return res.status(200).json({ data: busdata });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const busdata = await Busdata.findById(req.params.id).lean().exec();
		return res.status(200).json({ data: busdata });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

module.exports = router;
