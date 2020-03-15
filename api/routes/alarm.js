const express = require("express");
const router = express.Router();
const AlarmController = require("../controller/alarm");
const middleware = require("../middleware/index");

router.post("/", middleware.ensureAuthenticated, AlarmController.newAlarm);
router.put("/", middleware.ensureAuthenticated, AlarmController.editAlarm);
router.delete("/", middleware.ensureAuthenticated, AlarmController.deleteAlarm);
router.get("/", middleware.ensureAuthenticated, AlarmController.getAll);
router.get("/:id", middleware.ensureAuthenticated, AlarmController.getById);

module.exports = router;
