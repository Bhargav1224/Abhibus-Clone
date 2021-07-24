const express = require("express");

const Route = require("../models/route.model");
const router = express.Router();

router.post("/", async (req, res) => {
	try {
		const route = await Route.create(req.body);
		return res.status(200).json({ data: route });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

router.get("/", async (req, res) => {
	try {
		const route = await Route.find().populate("buses").lean().exec();
		console.log("res", route);
		return res.status(200).json({ data: route });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

router.get("/services", async (req, res) => {
	try {
		const from = req.query.from;
		const to = req.query.to;
		const date = req.query.date;
		const route = await Route.find({
			$and: [
				{ departureLocation: from },
				{ arrivalLocation: to },
				{ journeyDate: date },
			],
		})
			.populate("buses")
			.lean()
			.exec();
		return res.status(200).json({ data: route });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});


router.get("/:id", async (req, res) => {
	try {
		const route = await Route.findById(req.params.id).lean().exec();
		return res.status(200).json({ data: route });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

module.exports = router;
