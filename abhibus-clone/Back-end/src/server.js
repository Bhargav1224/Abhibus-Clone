const express = require("express");

const connect = require("./config/db");

const app = express();

app.use(express.json());

const userController = require("./controller/user.controller");
// app.use("/users", userController);

const start = async () => {
	await connect();
	app.listen(2333, () => {
		console.log("Listeing on port 2333");
	});
};

module.exports = start;
