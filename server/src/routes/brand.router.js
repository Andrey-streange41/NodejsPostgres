const Router = require('express');
const router = new Router();
const BrandController = require("../controllers/brand.controler");
const checkRole = require('../middlewares/checkRoleMiddleWare');

router.post('/create',checkRole('ADMIN'), BrandController.create);
router.get('/takeAll', BrandController.getAll);

module.exports = router;