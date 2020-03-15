const express = require('express')
const router = express.Router()
const controller = require('../controller/users')
const middleware = require('../middleware/index')

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post('/login',controller.login);
router.post('/register', controller.register);
router.get('/users', middleware.ensureAuthenticatedAndAdmin, controller.getUsers);
router.get('/user/me',middleware.ensureAuthenticated,controller.getMe);
router.get('/img',middleware.ensureAuthenticated, controller.getImage);
router.put('/user', middleware.ensureAuthenticated, controller.updateName);
router.put('/user/img', middleware.ensureAuthenticated, upload.single('avatar'),controller.updateImg);
router.put('/user/password', middleware.ensureAuthenticated, controller.updatePassword);
router.post('/users/:id', middleware.ensureAuthenticatedAndAdmin,controller.disabledUser);
router.delete('/user/img',middleware.ensureAuthenticated, controller.deleteImg);


module.exports = router
