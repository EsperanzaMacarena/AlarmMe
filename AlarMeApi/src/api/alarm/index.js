import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { token } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Alarm, { schema } from './model'

const router = new Router()
const { type, periocity, done, activated } = schema.tree

/**
 * @api {post} /alarm Create alarm
 * @apiName CreateAlarm
 * @apiGroup Alarm
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam type Alarm's type.
 * @apiParam periocity Alarm's periocity.
 * @apiParam done Alarm's done.
 * @apiParam activated Alarm's activated.
 * @apiSuccess {Object} alarm Alarm's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Alarm not found.
 * @apiError 401 user access only.
 */
router.post('/',
  token({ required: true }),
  body({ type, periocity, done, activated }),
  create)

/**
 * @api {get} /alarm Retrieve alarms
 * @apiName RetrieveAlarms
 * @apiGroup Alarm
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of alarms.
 * @apiSuccess {Object[]} rows List of alarms.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get('/',
  token({ required: true }),
  query(),
  index)

/**
 * @api {get} /alarm/:id Retrieve alarm
 * @apiName RetrieveAlarm
 * @apiGroup Alarm
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess {Object} alarm Alarm's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Alarm not found.
 * @apiError 401 user access only.
 */
router.get('/:id',
  token({ required: true }),
  show)

/**
 * @api {put} /alarm/:id Update alarm
 * @apiName UpdateAlarm
 * @apiGroup Alarm
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiParam type Alarm's type.
 * @apiParam periocity Alarm's periocity.
 * @apiParam done Alarm's done.
 * @apiParam activated Alarm's activated.
 * @apiSuccess {Object} alarm Alarm's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Alarm not found.
 * @apiError 401 user access only.
 */
router.put('/:id',
  token({ required: true }),
  body({ type, periocity, done, activated }),
  update)

/**
 * @api {delete} /alarm/:id Delete alarm
 * @apiName DeleteAlarm
 * @apiGroup Alarm
 * @apiPermission user
 * @apiParam {String} access_token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Alarm not found.
 * @apiError 401 user access only.
 */
router.delete('/:id',
  token({ required: true }),
  destroy)

export default router
