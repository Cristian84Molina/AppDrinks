const express = require("express");
const {getAll} = require('../controllers/LineasControllers');

const server = express();

//devuelve todas las Lineas creadas
server.get('/', async(req, res) => {
   const query = req.query;  
   try {
      const result = await getAll(query);
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json({message: error.message});
   };
});


module.exports = server;