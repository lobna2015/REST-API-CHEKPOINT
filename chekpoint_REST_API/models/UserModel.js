const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
        minLength: 3,
    },
    age:Number,
    email:{
        type: 'string',
        required: true,
        unique: true
    },
    createAt:{
        type: Date,
        default: new Date()

    }
})

module.exports = mongoose.model('user', userSchema)