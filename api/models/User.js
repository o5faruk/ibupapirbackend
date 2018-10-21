const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    uniqueValidator = require('mongoose-unique-validator');


const User = new Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true,
        required: 'Email is required!'
    },
    password: {
        type: String,
        trim: true,
        required: 'Password is required!'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

User.plugin(uniqueValidator)

User.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

User.methods.toJSON = function () {
    var obj = this.toObject()
    delete obj.password
    delete obj.__v
    return obj
}

module.exports = mongoose.model('User', User)

