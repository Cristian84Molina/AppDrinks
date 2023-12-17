const { comandas, itemcomandas, productos, conex, detaformaspago } = require('../dbConex');

const devuelveNumero = async() =>{
    const array = comandas.findAll();
    let numero = '0000000000';
    if(array.length) {
       await array.forEach(ele => {
          numero = ele.numero;
       });
    };
    let n = Number(numero)+1;
    numero = n.toString().padStart(10,'0');
    return num;
}; 


const addComanda = async(datos) => {
   const {fecha, bruto, impuesto, neto, cajero_id, items, itemsPago} = datos;
   if(!fecha || !bruto || !neto || !cajero_id || !items || !itemsPago) {
      throw Error("Datos Incompletos");
   };
   const num = devuelveNumero();
   const newReg = {
      fecha,
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
         fecha,
         cantidad: ele.cantidad,
         preciocosto: ele.preciocosto,
         valorunitario: ele.valorunitario,
         impuesto: ele.impuesto,
         comanda_id: grabado,id,
         producto_id: ele.producto_id,
         cajero_id,
      };
      await itemcomandas.create(newItem);
   });
   //ahora grabamos las formas de pago de la comanda
   itemsPago.forEach(async(ele) => {
       const newItem = {
          fecha,
          comanda_id: grabado.id,
          formapago_id,
          ctabancaria_id,
          cajero_id,
       };
       await detaformaspago.create(newItem);
   });
   return grabado;
};

module.exports = {addComanda};