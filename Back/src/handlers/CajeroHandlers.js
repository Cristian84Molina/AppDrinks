const express = require("express");
const { createCajeros, getAllcajeros, getCajeroById } = require("../controllers/CajeroControllers");
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

server.get('/', async(req, res) => {
    try {
        const result = await getAllcajeros();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

server.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const result = await getCajeroById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


module.exports = server;