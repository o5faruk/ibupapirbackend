const tokenDecoder = require('../services/token/decode'),
    User = require('../models/User')

module.exports = async (req, res, next) => {
    let auth = req.headers.authorization

    if (!auth) {
        return res.status(401).json({ "message": "Forbidden" })
    }

    auth = auth.split(' ')

    const auth_type = auth[0]
    const token = auth[1]

    if (auth[0] !== "Bearer") {
        return res.status(401).json({ "message": "Forbidden" })
    }

    try {
        const decoded = await tokenDecoder(token)
        req.user = await User.findOne({ _id: decoded._id })
        return next()
    }
    catch (exception) {
        return res.status(401).json(exception)
    }
}