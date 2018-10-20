let mongoose = require('mongoose'),
    Schema = mongoose.Schema()

let User = new Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: 'Email is required!'
    },
    password: {
        type: String
    },

})

module.exports = mongoose.model('User', User)

