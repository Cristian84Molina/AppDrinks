const express = require("express");
const {addComanda, findAllComandas, getComandaByID} = require('../controllers/ComandasControllers');
const server = express();

server.post('/', async(req, res) => {
   const datos = req.body;
   try {
       const result = await addComanda(datos);
       res.status(200).json(result);
   } catch (error) {
       res.status(500).json({message: error.message});
   }
});

server.get('/', async(req, res) => {
   try {
      const result = await findAllComandas();
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json({message: error.message});
   }
});

server.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const result = await getComandaByID(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = server;