const express = require('express')
const router = express.Router()
const controller = require('../controller/users')
const middleware = require('../middleware/index')

const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage })
/**
 * @api {post} /api/login Login
 * @apiName Login
 * @apiGroup Users
 * @apiParam {String} email User's email.
 * @apiParam {String} password User's password.
 * @apiSuccess (Success 200) {String} token User to be passed to other requests.
 * @apiError 404 Email or password or both are wrong.
 * @apiError 400 User account is disabled.
 */
router.post('/login',controller.login);

/**
 * @api {post} /api/register Register User
 * @apiName RegisterUser
 * @apiGroup Users
 * @apiParam {String} email User's email.
 * @apiParam {String} password User's password.
 * @apiParam {String} [fullname] User's fullname.
 * @apiParam {file} [avatar] User's picture.
 * @apiSuccess (Sucess 201) {Object} user User's data.
 * @apiError {Object} 400 Email already registered.
 */
router.post('/register', controller.register);

/**
 * @api {get} /api/users Retrieve users
 * @apiName RetrieveUsers
 * @apiGroup Users
 * @apiPermission admin
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 200) {Object[]} users List of users.
 * @apiError {Object} 404 There is no users to show.
 * @apiError 401 Admin access only.
 */
router.get('/users', middleware.ensureAuthenticatedAndAdmin, controller.getUsers);


/**
 * @api {get} /api/user/me Retrieve current user
 * @apiName RetrieveCurrentUser
 * @apiGroup User
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 200) {Object} user User's data.
 */
router.get('/user/me',middleware.ensureAuthenticated,controller.getMe);

/**
 * @api {get} /api/img Retrieve the user's picture
 * @apiName RetrievePictureUser
 * @apiGroup User
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiSuccess (Success 200) {Object} user User's picture.
 * @apiError 404 User not found.
 */
router.get('/img',middleware.ensureAuthenticated, controller.getImage);
/**
 * @api {put} /api/user Update of current user's name
 * @apiName UpdateUserName
 * @apiGroup User
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiParam {String} [fullname] User's name.
 * @apiSuccess (Success 200) {Object} user User's data.
 * @apiError 401 Current user or admin access only.
 * @apiError 404 User not found.
 */
router.put('/user', middleware.ensureAuthenticated, controller.updateName);

/**
 * @api {put} /api/user/img Update of current user's picture
 * @apiName UpdatePictureUser
 * @apiGroup User
 * @apiPermission user
 * @apiParam {String} access_token User access_token.
 * @apiParam {String} [avatar] User's picture.
 * @apiSuccess (Success 200) {Object} user User's data.
 * @apiError 401 Current user or admin access only.
 * @apiError 404 User not found.
 */
router.put('/user/img', middleware.ensureAuthenticated, upload.single('avatar'),controller.updateImg);

/**
 * @api {put} /api/user/password Update current user's password
 * @apiName UpdatePassword
 * @apiGroup User
 * @apiParam {String} access_token User access_token.
 * @apiParam {String} password User's new password.
 * @apiSuccess (Success 200) {Object} user User's data.
 * @apiError 401 Current user or admin access only.
 * @apiError 404 User not found.
 */
router.put('/user/password', middleware.ensureAuthenticated, controller.updatePassword);

/**
 * @api {put} /api/user/:id Set field enabled
 * @apiName UpdateFieldEnabled
 * @apiGroup User
 * @apiParam {String} access_token Admin access_token.
 * @apiParam {String} enabled True if user is enabled, false if user is disabled.
 * @apiSuccess (Success 200) {Object} user User's data.
 * @apiError 401 Current user or admin access only.
 * @apiError 404 User not found.
 */
router.put('/users/:id', middleware.ensureAuthenticatedAndAdmin,controller.disabledUser);

/**
 * @api {delete} /api/user/img Delete of current user's picture
 * @apiName DeletePictureUser
 * @apiGroup User
 * @apiPermission user
 * @apiParam {String} access_token Token  User access_token.
 * @apiSuccess (Success 204) 200 User's data.
 * @apiError 401 Current user or admin access only.
 * @apiError 404 User not found.
 */
router.delete('/user/img',middleware.ensureAuthenticated, controller.deleteImg);


module.exports = router
