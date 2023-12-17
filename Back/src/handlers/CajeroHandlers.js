const express = require("express");
const {createCajeros} = require('../controllers/CajerosControllers');
const server = express();

server.post('/', async(req, res) => { 
    const datos = req.body;
    try {
        const result = await createCajeros(datos);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports = server;