const mongoose = require("mongoose");

const travelAgencySchema = new mongoose.Schema({
    name: { type: String, required: true },
    boarding_locations: [{ type: String, required: true }],
    dropping_locations: [{ type: String, required: true }],
    
    

}, {
    versionKey: false,
    timestamps:true
})

const User = mongoose.model('user', travelAgencySchema);

module.exports = User;
