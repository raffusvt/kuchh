const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type : String,
        requiredd : true,
    },
    password:{
        type:String,
        required: true,
    }
    /*gender: {
        type:String,
        enum: ['male','female']
    } */
})

const userModel = mongoose.model('user', userSchema)

module.exports=userModel

