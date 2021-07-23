const express = require('express');
// const mongoose = require("mongoose");

const User = require("../models/user.model");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(200).json({ data: user });
    }
    catch (er) {
        return res.status(400).json({message:`Bad Request-${er}`})
    }
})


router.get("/", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).json({ data: user });
    }
    catch (er) {
        return res.status(400).json({message:`Bad Request-${er}`})
    }
})

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).json({ data: user });
    }
    catch (er) {
        return res.status(400).json({message:`Bad Request-${er}`})
    }
})

module.exports = router;