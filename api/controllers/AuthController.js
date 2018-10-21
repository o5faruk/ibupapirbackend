const User = require('../models/User'),
    jwt = require('jsonwebtoken')

module.exports = {
    register: async (req, res) => {
        const newUser = new User(
            req.body
        );
        try {
            await newUser.save()
            return res.json(newUser);
        } catch (error) {
            return res.json(error);
        }
    }
}