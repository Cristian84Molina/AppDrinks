const { productos, lineas } = require('../dbConex');

const getProductosAll = async() => {
   const array = await productos.findAll({
      include:[
         {model: lineas, attributes: { exclude: ['createdAt','updatedAt']}}
      ]
   });
   return array;
};

const addProducto = async(datos) => {
   const {name, image, active, preciocosto, precioventa, impuesto, preparacion, linea_id} = datos;
   if(!name || !active || !preciocosto || !precioventa || !preparacion || !linea_id ) {
      throw Error("Datos Incompletos");
   };
   const result = await productos.create(datos);
   return result;
};

const getProductosxLinea = async(id) => {
    const idLin = Number(id);
    const array = await productos.findAll(
    {where: {linea_id: idLin}},    
    {include:[
          {model: lineas, attributes: { exclude: ['createdAt','updatedAt']}}
       ]
    });
    return array;
};

const getProductosById = async(id) => {
   const idreg = Number(id);
   const array = await productos.findByPk(idreg)
   return array;
};

module.exports = {getProductosAll, 
                  addProducto,
                  getProductosById,
                  getProductosxLinea};