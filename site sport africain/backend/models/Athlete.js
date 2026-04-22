const mongoose = require("mongoose");

const athleteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sport: {
        type: String,
        required: true
    },
    poste: {
        type: String,
        required: true
    },
    discipline: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    flag: {
        type: String,
        required: true
    },
    age: String,
    club: String,
    image: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    stats: {
        type: Map,
        of: String
    },
    achievements: [String],
    socialMedia: {
        instagram: String,
        twitter: String,
        facebook: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Athlete", athleteSchema);
