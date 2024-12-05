const mongoose = require('mongoose')
//require mongoose as mongoose


//used to specify the values to be stored in userModel:
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    gender: {
        type: String,
        enum: ['male', 'female']
    }
})
//creating userModel:
const userModel = mongoose.model('user', userSchema)

module.exports = userModel;