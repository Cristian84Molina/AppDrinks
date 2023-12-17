const {Router} = require('express');
const router = Router();
const LineasRouter = require('../handlers/LineasHandlers');
const ProductosRouter = require("../handlers/ProductosHandlers");
const CajeroRouter = require("../handlers/CajeroHandlers");


router.use('/lineas', LineasRouter);
router.use('/productos', ProductosRouter);
router.use('/cajeros', CajeroRouter);

module.exports = router;