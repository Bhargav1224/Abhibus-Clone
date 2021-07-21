const jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
};

module.exports = newToken;