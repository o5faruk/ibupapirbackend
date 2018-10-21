const jwt = require('jsonwebtoken')
const config = require('../../../config')

module.exports = async (user) => {
    const token = await jwt.sign(user, config.secret, {
        expiresIn: 24 * 60 * 60
    })
    return token;
}