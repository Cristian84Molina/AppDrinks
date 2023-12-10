const { lineas } = require('../dbConex');

//devuelve todas las lineas creadas
const getAll = async(query) => {
   if(query){
      const array = await lineas.findAll({where: {active: 1}});
      return array;
   } else {
      const array = await lineas.findAll()
      return array;
   };
};

//agregar nueva linea
const addLinea = async(datos) => {
    const {name, image} = datos;
    if(!datos.image) datos.image = null;
    if(!name) {
        throw Error("Nombre de la Linea no especificado");
    };
    const result = await lineas.create(datos);
    return result;
};

//actualiza linea
const updateLinea = async(datos, idreg) => {
    const {name, image} = datos;
    if(!idreg) throw Error("id de registro no especificado");
    if(!datos.image) datos.image = null; 
    if(!name) {
        throw Error("Nombre de la Linea no especificado");
    };
    const result = await lineas.update(datos, {where: {id: idreg}});
    return result;  
};

//devuelve linea por el ID
const getLineaById = async(id) => {
   const idreg = Number(id);
   const result = await lineas.findByPk(id);
   return result;
};

module.exports = {getAll, addLinea, updateLinea, getLineaById};