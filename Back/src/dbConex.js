const {Sequelize, Model} = require('sequelize');
require('dotenv').config();

//cargamos los modelos
const lineasModel = require('./models/Lineas');
const productosModel = require('./models/Productos');
const cajerosModel = require('./models/Cajeros');
const comandasModel = require('./models/Comandas');
const itemComandasModel = require('./models/ItemComandas');
const formaspagoModels = require('./models/FormasPago');
const cuentasbancariasModels = require('./models/CuentasBancarias');
const detaformaspagoModels = require('./models/DetaFormasPago');
const cierrecajaModels = require('./models/CierreCaja');
const transaccionesModels = require('./models/Transacciones');

const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME, DB_DEPLOY} = process.env;


/* const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
    logging: false,

}); */


const dbUrl = 'mysql://root:C1dda2AedGd4DBhbd624a6FHE5-bFfgd@mysql.railway.internal:3306/railway';

const sequelize = new Sequelize(dbUrl, {
  dialect: 'mysql', // Asegúrate de especificar el dialecto correctamente
  logging: false, // Puedes ajustar la configuración de logging según tus necesidades
});

lineasModel(sequelize);
productosModel(sequelize);
cajerosModel(sequelize);
comandasModel(sequelize);
itemComandasModel(sequelize);
formaspagoModels(sequelize);
cuentasbancariasModels(sequelize);
detaformaspagoModels(sequelize);
cierrecajaModels(sequelize);
transaccionesModels(sequelize);

const { lineas,
        cajeros,
        comandas,
        itemcomandas,
        formaspago,
        cuentasbancarias,
        detaformaspago,
        cierrecaja,
        transacciones,
        productos} = sequelize.models;

//definimos las relaciones
lineas.hasMany(productos, {foreignKey: 'linea_id', sourceKey: 'id'});
productos.belongsTo(lineas, {foreignKey: 'linea_id', targetKey: 'id'});

cajeros.hasMany(comandas, {foreignKey: 'cajero_id', sourceKey: 'id'});
comandas.belongsTo(cajeros, {foreignKey: 'cajero_id', targetKey: 'id'});

comandas.hasMany(itemcomandas, {foreignKey: 'comanda_id', sourceKey: 'id'});
itemcomandas.belongsTo(comandas, {foreignKey: 'comanda_id', targetKey: 'id'});
itemcomandas.belongsTo(productos, {foreignKey: 'producto_id', targetKey: 'id'});
itemcomandas.belongsTo(cajeros, {foreignKey: 'cajero_id', targetKey: 'id'});

comandas.hasMany(detaformaspago, {foreignKey: 'comanda_id', sourceKey: 'id'});
detaformaspago.belongsTo(comandas, {foreignKey: 'comanda_id', targetKey: 'id'});
detaformaspago.belongsTo(formaspago, {foreignKey: 'formapago_id', targetKey: 'id'});
detaformaspago.belongsTo(cuentasbancarias, {foreignKey: 'ctabancaria_id', targetKey: 'id'});
detaformaspago.belongsTo(cajeros, {foreignKey: 'cajero_id', targetKey: 'id'});

cajeros.hasMany(cierrecaja, {foreignKey: 'cajero_id', sourceKey: 'id'});
cierrecaja.belongsTo(cajeros, {foreignKey: 'cajero_id', targetKey: 'id'});

cajeros.hasMany(transacciones, {foreignKey: 'cajero_id', sourceKey: 'id'});
transacciones.belongsTo(cajeros, {foreignKey: 'cajero_id', targetKey: 'id'});
transacciones.belongsTo(cuentasbancarias, {foreignKey: 'ctabancaria_id', targetKey: 'id'});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Conexion Exitosa");
    } catch (error) {
        console.log("Error de conexion");
    }
 };
 
 
 testConnection();

 module.exports = {
    lineas,
    productos,
    comandas,
    cajeros,
    itemcomandas,
    formaspago,
    cuentasbancarias,
    detaformaspago,
    transacciones,
    conex: sequelize
 };