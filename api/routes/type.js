const express = require('express')
const router = express.Router()
const middleware = require('../middleware/index')
const controller = require('../controller/type')
/**
 * @api {get} /api/type Retrieve types
 * @apiName RetrieveTypes
 * @apiGroup Type
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 200) {Object[]} List of types.
 * @apiError 401 Admin can access only.
 */
router.get('/type', middleware.ensureAuthenticatedAndAdmin, controller.getAll);

/**
 * @api {get} /api/places Retrieve types of Places (enum)
 * @apiName RetrieveTypesPlaces
 * @apiGroup Type
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 200) {Object[]} List of types.
 * @apiError 401 Admin can access only.
 */
router.get('/places', middleware.ensureAuthenticatedAndAdmin,controller.getPlaces);

/**
 * @api {get} /api/type/:id Retrieve type
 * @apiName RetrieveType
 * @apiGroup Type
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess {Object} type Type's data.
 * @apiError 404 Type not found.
 * @apiError 401 admin access only.
 */
router.get('/type/:id', middleware.ensureAuthenticatedAndAdmin,controller.getOne);

/**
 * @api {post} /type Create type
 * @apiName CreateType
 * @apiGroup Type
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam description Type's description.
 * @apiParam typePlaces Type's typePlaces.
 * @apiSuccess {Object} type Type's data.
 * @apiError 404 Type not found.
 * @apiError 401 admin access only.
 */
router.post('/type', middleware.ensureAuthenticatedAndAdmin, controller.register);

/**
 * @api {put} /api/type/:id Update type
 * @apiName UpdateType
 * @apiGroup Type
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam description Type's description.
 * @apiParam typePlaces Type's typePlaces.
 * @apiSuccess {Object} type Type's data.
 * @apiError 404 Type not found.
 * @apiError 401 admin access only.
 */
router.put('/type/:id', middleware.ensureAuthenticatedAndAdmin, controller.update);

/**
 * @api {delete} /api/type/:id Delete type
 * @apiName DeleteType
 * @apiGroup Type
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Type not found.
 * @apiError 401 admin access only.
 */
router.delete('/type/:id', middleware.ensureAuthenticatedAndAdmin, controller.delete);


module.exports = router;
