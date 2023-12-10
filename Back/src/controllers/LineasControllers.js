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

module.exports = {getAll};