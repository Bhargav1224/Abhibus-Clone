const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
            if (err) {
                return reject(err);
            }

            return resolve(payload);
        });
    });
};

const protect = async (req, res, next) => {
    const bearerToken = req.headers.authorization;

    //If token is not present or not starting with Braer, then it is invalid
    if (!bearerToken || !bearerToken.startsWith("Bearer")) {
        return res
            .status(400)
            .json({ status: "Failed", message: "Token is required" });
    }

    // console.log(bearerToken);
    const token = bearerToken.split(" ")[1];

    //If valid token is come, we need to verify that
    const payload = await verifyToken(token);

    //If payload is not verified, we return invalid
    console.log("payload", payload);
    if (!payload) {
        return res
            .status(400)
            .json({ status: "Failed", message: "Invalid Token" });
    }

    //If payload is returned, then retrieve the user from it and attach it to the request
    req.user = payload;
    next();
};

module.exports = protect;