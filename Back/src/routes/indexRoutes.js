const {Router} = require('express');
const router = Router();
const LineasRouter = require('../handlers/LineasHandlers.js');
const ProductosRouter = require('../handlers/ProductosHandlers.js')
const CajeroRouter = require("../handlers/CajeroHandlers.js");


router.use('/lineas', LineasRouter);
router.use('/productos', ProductosRouter);
router.use('/cajeros', CajeroRouter);

module.exports = router;