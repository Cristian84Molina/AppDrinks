const {Router} = require('express');
const router = Router();
const LineasRouter = require('../handlers/LineasHandlers');

router.use('/lineas', LineasRouter);

module.exports = router;