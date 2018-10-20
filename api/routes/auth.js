const router = require('express').Router()
const AuthController = require('../api/controllers/AuthController')

router.get('/register', AuthController.register)

module.exports = router;
