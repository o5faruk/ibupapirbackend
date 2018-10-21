const User = require('../models/User'),
    bcrypt = require('bcrypt'),
    tokenCreator = require('../services/token/create')

module.exports = {
    register: async (req, res) => {
        const newUser = new User(req.body)
        try {
            await newUser.save()
            return res.json(newUser)
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    login: async (req, res) => {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) return res.status(401).send({ "message": "Bad Credentials" })

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).send({ "message": "Bad Credentials" })
        }
        try {
            let password_ok = await bcrypt.compare(password, user.password)
            if (password_ok) {
                const token = await tokenCreator({ _id: user._id })
                return res.json({ token })
            } else {
                return res.status(401).send({ "message": "Bad Credentials" })
            }
        } catch (error) {
            return res.status(500).send({ message: "Server Error" })
        }
    },
    me: async (req, res) => {
        console.log("HERE");
        return res.json(req.user)
    }
}