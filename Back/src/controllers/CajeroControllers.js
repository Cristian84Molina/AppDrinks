const { cajeros } = require('../dbConex');

const createCajeros = async (datos) => {
   
        
        const newCajero = await cajeros.create(datos);
        return newCajero;
    
}

module.exports = { createCajeros };
