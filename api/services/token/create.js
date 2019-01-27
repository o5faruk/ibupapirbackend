const jwt = require('jsonwebtoken')

module.exports = async (user) => {
    const token = await jwt.sign(user, process.env.SECRET, {
        expiresIn: 24 * 60 * 60
    })
    return token
}