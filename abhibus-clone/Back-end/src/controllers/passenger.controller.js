const express = require("express");
const { body, validationResult } = require("express-validator");
const Passenger = require("../models/passenger.model");
const router = express.Router();

router.post(
	"/",
	body("name").isLength({ min: 3 }).withMessage("name is required"),
	body("mobile").isLength({ min: 10 }).withMessage("mobile number is required"),
	body("email")
		.isEmail()
		.withMessage("Email is required and must be valid email address"),
	body("emergency_Contact")
		.isLength({ min: 10, max: 10 })
		.withMessage("emergency_Contact is requires "),
	body("age").isLength({ min: 1, max: 100 }).withMessage("Age is required"),
	body("gender").isLength({ min: 3 }).withMessage("Gender is required"),
	async (req, res) => {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ data: errors.array() });
			}
			const passenger = await Passenger.create(req.body);
			return res.status(200).json({ data: passenger });
		} catch (er) {
			return res.status(400).json({ message: `Bad Request-${er}` });
		}
	}
);

router.get("/", async (req, res) => {
	try {
		const passenger = await Passenger.find()

			.lean()
			.exec();
		return res.status(200).json({ data: passenger });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const passenger = await Passenger.findById(req.params.id).lean().exec();
		return res.status(200).json({ data: passenger });
	} catch (er) {
		return res.status(400).json({ message: `Bad Request-${er}` });
	}
});

module.exports = router;
