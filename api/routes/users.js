const express = require('express')
const router = express.Router()
const controller = require('../controller/users')
const middleware = require('../middleware/index')

router.post('/login',controller.login);
router.post('/register', controller.register);
router.get('/users', middleware.ensureAuthenticatedAndAdmin, controller.getUsers);


module.exports = router
