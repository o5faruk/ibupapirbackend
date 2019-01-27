const router = require('express').Router()
const AuthController = require('../controllers/AuthController')
const isLoggedIn = require('../middleware/isLoggedIn')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/me', isLoggedIn, AuthController.me)

module.exports = router
