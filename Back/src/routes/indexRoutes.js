const {Router} = require('express');
const router = Router();
const LineasRouter = require('../handlers/LineasHandlers');
const ProductosRouter = require("../handlers/ProductosHandlers,js");

router.use('/lineas', LineasRouter);
router.use('/productos', ProductosRouter);

module.exports = router;