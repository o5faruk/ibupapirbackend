const auth = require('./auth')
const institution = require('./InstitutionRoutes')

module.exports = (app) => {
    app.use('/api/auth', auth)
    app.use('/api/institution', institution)
}
