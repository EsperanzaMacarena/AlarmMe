const express = require('express')
const router = express.Router()
const middleware = require('../middleware/index')
const controller = require('../controller/type')

router.get('/type', middleware.ensureAuthenticatedAndAdmin, controller.getAll);
router.get('/type/:id', middleware.ensureAuthenticatedAndAdmin,controller.getOne);
router.post('/type', middleware.ensureAuthenticatedAndAdmin, controller.register);
router.put('/type/:id', middleware.ensureAuthenticatedAndAdmin, controller.update);
router.delete('/type/:id', middleware.ensureAuthenticatedAndAdmin, controller.delete);