require("dotenv").config();
let passport = require("passport");
let GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user.model");
const  newToken  = require("../controllers/auth.controller");
const { v4: uuid } = require("uuid");

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:8000/auth/google/callback",
        },
        async function (accessToken, refreshToken, profile, done) {
            let user = await User.findOne({ email: profile?._json?.email })
                .lean()
                .exec();
            let token;
            if (user) {
                token = newToken(user);
            } else {
                user = await User.create({
                    email: profile?._json?.email,
                    password: uuid(),
                });
                token = newToken(user);
            }
            // console.log(accessToken, refreshToken, profile);
            // console.log(user, token);
            return done(null, { user, token });
        },
    ),
);

module.exports = passport;