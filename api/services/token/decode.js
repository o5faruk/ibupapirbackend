const jwt = require('jsonwebtoken')
const config = require('../../../config')

module.exports = async (token) => {
    let decoded = await jwt.verify(token, config.secret)
    return decoded;
}