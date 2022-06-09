const Router = require('express');
const router = new Router();
const TypeController = require("../controllers/type.controler");
const checkRole = require('../middlewares/checkRoleMiddleWare');

router.post('/create', checkRole('ADMIN'), TypeController.create);
router.get('/takeAll',TypeController.getAll);

module.exports = router;