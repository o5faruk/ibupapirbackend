const jwt = require('jsonwebtoken')

module.exports = async (token) => {
    let decoded = await jwt.verify(token, process.env.SECRET)
    return decoded
}