const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})
const loginModel = mongoose.model('info', loginSchema)
module.exports = loginModel