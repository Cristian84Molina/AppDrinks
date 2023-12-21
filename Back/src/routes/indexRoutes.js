const {Router} = require('express');
const router = Router();
const LineasRouter = require('../handlers/LineasHandlers.js');
const ProductosRouter = require('../handlers/ProductosHandlers.js');
const CajeroRouter = require("../handlers/CajeroHandlers.js");
const ComandasRouter = require("../handlers/ComandasHandlers.js");
const FormaspagoRouter = require("../handlers/FormasPagoHandler.js");


router.use('/lineas', LineasRouter);
router.use('/productos', ProductosRouter);
router.use('/cajeros', CajeroRouter);
router.use('/comandas', ComandasRouter);
router.use('/formaspago', FormaspagoRouter);

module.exports = router;