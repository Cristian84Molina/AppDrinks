const {formaspago} = require('../dbConex');

const createFormaspago = async (datos) => {
    const {id,
    name,
    active,
    maneja_ctabanco} = datos;
    if (!id ||!name ||!active ||!maneja_ctabanco) { throw new Error('Datos faltantes') }
    const newFormaspago = await formaspago.create({
        id,
        name,
        active,
        maneja_ctabanco
    });
    return newFormaspago;
}

module.exports = { createFormaspago };