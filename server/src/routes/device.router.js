const Router = require("express");
const router = new Router();
const DeviceController = require("../controllers/device.controler");
const checkRole = require('../middlewares/checkRoleMiddleWare');

router.post("/create", checkRole('ADMIN'), DeviceController.create);
router.get("/takeAll", DeviceController.getAll);
router.get("/:id", DeviceController.getDeviceById);

module.exports = router;
