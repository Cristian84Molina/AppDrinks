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
   if(!name || !linea_id ) {
      throw Error("Datos Básicos Incompletos");
   };
   const newReg = {
       name,
       image: image ?image : null,
       active: active ?active : 1,
       preciocosto: preciocosto ?preciocosto : 0,
       precioventa: precioventa ?precioventa : 0,
       impuesto: impuesto ?impuesto : 0,
       preparacion: preparacion ?preparacion : null,
       linea_id
   };
 
   const result = await productos.create(newReg);
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

const updateProducto = async(datos, id) => {
   const {name, image, active, preciocosto, precioventa, impuesto, preparacion, linea_id} = datos;
   if(!name || !linea_id  || !id) {
      throw Error("Datos Básicos Incompletos");
   };
   const idreg = Number(id);
   const newReg = {
       name,
       image: image ?image : null,
       active: active ?active : 1,
       preciocosto: preciocosto ?preciocosto : 0,
       precioventa: precioventa ?precioventa : 0,
       impuesto: impuesto ?impuesto : 0,
       preparacion: preparacion ?preparacion : null,
       linea_id
   };  
   const registro = productos.update(newReg, {where: {id: idreg}});
   return registro; 
};

module.exports = {getProductosAll, 
                  addProducto,
                  getProductosById,
                  getProductosxLinea,
                  updateProducto};