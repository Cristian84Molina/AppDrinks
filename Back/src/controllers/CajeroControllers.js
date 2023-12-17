const { cajeros } = require("../dbConex");

const createCajeros = async (datos) => {
  const newCajero = await cajeros.create(datos);
  return newCajero;
};

const getAllcajeros = async () => {
    const cajeros = await cajeros.findAll();
    return cajeros;
}

const getCajeroById = async (id) => {
    const cajero = await cajeros.findOne({
        where: {
            id: id
        }
    });
    return cajero;

}

module.exports = { createCajeros, getAllcajeros, getCajeroById };
