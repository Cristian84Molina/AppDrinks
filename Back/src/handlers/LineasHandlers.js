const express = require("express");
const {getAll, addLinea, updateLinea, getLineaById} = require('../controllers/LineasControllers');

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

//agrega linea nueva
server.post('/', async(req, res) => {
   const datos = req.body;
   try {
       const result = await addLinea(datos);
       res.status(200).json(result);
   } catch (error) {
       res.status(500).json({message: error.message});    
   }
});

//modifica linea
server.put('/:id', async(req, res) => {
   const datos = req.body;
   const {id} = req.params;
   try {
       const result = await updateLinea(datos, id);
       res.status(200).json(result);
   } catch (error) {
       res.status(500).json({message: error.message});        
   }
});

//devuelve la linea identificada por el id
server.get('/:id', async(req, res) => {
    const {id} = req.params;  
    try {
       const result = await getLineaById(id);
       res.status(200).json(result);
    } catch (error) {
       res.status(500).json({message: error.message});
    };
 });

module.exports = server;