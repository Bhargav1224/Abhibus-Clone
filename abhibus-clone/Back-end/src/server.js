const express = require("express");
const passport = require("./config/passport");
const connect = require("./config/db");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
//-----------------CRUD operation on user Schema ----------------
const userController = require("./controllers/user.controller");
app.use("/users", userController);

//-----------------CRUD operation on route Schema ----------------
const routeController = require("./controllers/route.controller");
app.use("/routes", routeController);

//-----------------CRUD operation on bus Schema ----------------
const busController = require("./controllers/bus.controller");
app.use("/buses", busController);

//-----------------CRUD operation on passenger Schema ----------------
const passengerController = require("./controllers/passenger.controller");
app.use("/passengers", passengerController);

//------------Creating GOOGLE OAUTH  Using passport js -----------------------
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
	done(null, "user");
});

passport.deserializeUser(function (id, done) {
	done(null, "user");
});

app.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: [
			"https://www.googleapis.com/auth/userinfo.profile",
			"https://www.googleapis.com/auth/userinfo.email",
		],
	})
);

app.get(
	"/auth/google/callback",
	passport.authenticate("google", { failureRedirect: "/login" }),
	function (req, res) {
		const { user, token } = req.user;
		res.status(200).json({
			user: user,
			token: token,
			message: "you are authenticated",
		});
	}
);

//--------Staring the server ---------------------
const start = async () => {
	try {
		await connect();
		app.listen(8000, () => {
			console.log("Listening on port 8000");
		});
	} catch (e) {
		console.log(e);
	}
};

module.exports = start;
