const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    email: {
        type: String,
        required: true,
        min: 6
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    college: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    regNo: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "User"
    }
})

module.exports = mongoose.model('user', schema)