const express = require("express");
const { createCajeros, getAllcajeros, getCajeroById, getCajeroByName } = require("../controllers/CajeroControllers");
const server = express();
const bcrypt = require('bcrypt');


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


// Nueva ruta para la autenticación
server.post('/authenticate', async (req, res) => {
    const { name, password } = req.body;
    try {
        const cajero = await getCajeroByName(name);

        if (cajero) {
            const passwordMatch = await bcrypt.compare(password, cajero.password);

            if (passwordMatch) {
                res.status(200).json({ message: 'Autenticación exitosa' });
            } else {
                res.status(401).json({ message: 'Credenciales incorrectas' });
            }
        } else {
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        console.error('Error al autenticar:', error);
        res.status(500).json({ message: 'Error interno al autenticar' });
    }
});

module.exports = server;