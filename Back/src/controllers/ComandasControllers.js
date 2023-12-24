const { comandas, itemcomandas, productos, conex, detaformaspago,formaspago } = require('../dbConex');

const devuelveNumero = async() =>{
   const maxNumber = await comandas.max('numero');
   let numero = maxNumber || '0000000000';

   let n = Number(numero) + 1;
   numero = n.toString().padStart(10, '0');

   return numero;
}; 


const addComanda = async(datos) => {
   const {fecha, bruto, impuesto, neto, cajero_id, items, itemsPago} = datos;
   if(!fecha || !bruto || !neto || !cajero_id || !items || !itemsPago) {
      throw Error("Datos Incompletos");
   };

   const fecha2 = new Date(Date.now());
   const num = await devuelveNumero();
   const newReg = {
      fecha: fecha2,
      numero: num,
      bruto,
      impuesto,
      neto,
      cajero_id,
   };

   const grabado = await comandas.create(newReg);
   //ahora grabamos los items de la comanda
   items.forEach(async(ele) => {
      const newItem = {
         fecha: fecha2,
         cantidad: ele.cantidad,
         preciocosto: ele.preciocosto,
         valorunitario: ele.valorunitario,
         impuesto: ele.impuesto,
         comanda_id: grabado.id,
         producto_id: ele.producto_id,
         cajero_id,
      };
      await itemcomandas.create(newItem);
   });
   //ahora grabamos las formas de pago de la comanda
   console.log(itemsPago);
   itemsPago.forEach(async(ele) => {
       const newItem = {
          fecha: fecha2,
          comanda_id: grabado.id,
          formapago_id: ele.formapago_id,
          ctabancaria_id: ele.ctabancaria_id,
          cajero_id,
          valor: ele.valor,
       };
       console.log(newItem)
       await detaformaspago.create(newItem);
   });
   return grabado;
};
const getComandaByID = async(id) => {
   const idreg = Number(id);
   const array = await comandas.findByPk(idreg, {
      include: [
         {
           model: itemcomandas,
           include: [
             {
               model: productos,
             },
           ],
         },
      ],
   });
   return array;
};


const findAllComandas = async () => {
  try {
    const result = await comandas.findAll({
      include: [
        {
          model: itemcomandas,
          include: [
            {
              model: productos,
            },
          ],
        },
        {
          model: detaformaspago,
          include: [
            {
              model: formaspago,
            },
          ],
        },
      ],
    });
    return result;
  } catch (error) {
    console.error('Error al buscar todas las comandas:', error);
    throw error; // Puedes manejar el error según tus necesidades
  }
};


module.exports = {addComanda, findAllComandas, getComandaByID};