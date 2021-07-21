const express = require("express");
const passport = require("./config/passport");
const connect = require("./config/db");

const app = express();

app.use(express.json());

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
    }),
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
    },
);

const start = async () => {
	await connect();
	app.listen(8000, () => {
		console.log("Listeing on port 8000");
	});
};

module.exports = start;
