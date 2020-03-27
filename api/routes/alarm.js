const express = require("express");
const router = express.Router();
const AlarmController = require("../controller/alarm");
const middleware = require("../middleware/index");




/**
 * @api {get} api/alarm/myalarms Retrieve alarms by creator id
 * @apiName Retrieve alarms by creator
 * @apiGroup Alarm
 * @apiPermission user
 * @apiSuccess {Object} alarm Alarm's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Alarm not found.
 * @apiError 401 user access only.
 */
router.get("/myalarms", middleware.ensureAuthenticated, AlarmController.getByUserId);

/**
 * @api {post} api/alarm Create alarm
 * @apiName Create Alarm
 * @apiGroup Alarm
 * @apiPermission user
 * @apiParam type Alarm's type.
 * @apiParam done Alarm's done.
 * @apiParam activated Alarm's activated.
 * @apiSuccess {Object} alarm Alarm's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Alarm not found.
 * @apiError 401 user access only.
 */
router.post("/", middleware.ensureAuthenticated, AlarmController.newAlarm);

/**
 * @api {put} api/alarm/:id Update alarm
 * @apiName UpdateAlarm
 * @apiGroup Alarm
 * @apiPermission user
 * @apiParam type Alarm's type.
 * @apiParam done Alarm's done.
 * @apiParam activated Alarm's activated.
 * @apiSuccess {Object} alarm Alarm's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Alarm not found.
 * @apiError 401 user access only.
 */
router.put("/", middleware.ensureAuthenticated, AlarmController.editAlarm);

/**
 * @api {delete} api/alarm/:id Delete alarm
 * @apiName DeleteAlarm
 * @apiGroup Alarm
 * @apiPermission user
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Alarm not found.
 * @apiError 401 user access only.
 */
router.delete("/:id", middleware.ensureAuthenticated, AlarmController.deleteAlarm);

/**
 * @api {delete} api/alarm/activateordeactivate/:id Activate or deactivate alarm
 * @apiName ActivateOrDeactivate alarm
 * @apiGroup Alarm
 * @apiPermission user
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Alarm not found.
 * @apiError 401 user access only.
 */
router.put("/activateordeactivate/:id", middleware.ensureAuthenticated, AlarmController.activateOrDeactivate);

/**
 * @api {get} api/alarm Retrieve alarms
 * @apiName RetrieveAlarms
 * @apiGroup Alarm
 * @apiPermission user
 * @apiSuccess {Object[]}  List of alarms.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 user access only.
 */
router.get("/", middleware.ensureAuthenticated, AlarmController.getAll);

/**
 * @api {get} api/alarm/:id Retrieve alarm
 * @apiName Retrieve Alarm by id
 * @apiGroup Alarm
 * @apiPermission user
 * @apiSuccess {Object} alarm Alarm's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Alarm not found.
 * @apiError 401 user access only.
 */
router.get("/:id", middleware.ensureAuthenticated, AlarmController.getById);



module.exports = router;
