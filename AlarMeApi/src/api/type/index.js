import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export { Type, schema } from './model'

const router = new Router()
const { description, typePlaces, ubication } = schema.tree

/**
 * @api {post} /type Create type
 * @apiName CreateType
 * @apiGroup Type
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam description Type's description.
 * @apiParam typePlaces Type's typePlaces.
 * @apiParam ubication Type's ubication.
 * @apiSuccess {Object} type Type's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Type not found.
 * @apiError 401 admin access only.
 */
router.post('/',
  token({ required: true, roles: ['admin'] }),
  body({ description, typePlaces, ubication }),
  create)

/**
 * @api {get} /type Retrieve types
 * @apiName RetrieveTypes
 * @apiGroup Type
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of types.
 * @apiSuccess {Object[]} rows List of types.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /type/:id Retrieve type
 * @apiName RetrieveType
 * @apiGroup Type
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} type Type's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Type not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /type/:id Update type
 * @apiName UpdateType
 * @apiGroup Type
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiParam description Type's description.
 * @apiParam typePlaces Type's typePlaces.
 * @apiParam ubication Type's ubication.
 * @apiSuccess {Object} type Type's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Type not found.
 * @apiError 401 admin access only.
 */
router.put('/:id',
  token({ required: true, roles: ['admin'] }),
  body({ description, typePlaces, ubication }),
  update)

/**
 * @api {delete} /type/:id Delete type
 * @apiName DeleteType
 * @apiGroup Type
 * @apiPermission admin
 * @apiParam {String} access_token admin access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Type not found.
 * @apiError 401 admin access only.
 */
router.delete('/:id',
  token({ required: true, roles: ['admin'] }),
  destroy)

export default router
