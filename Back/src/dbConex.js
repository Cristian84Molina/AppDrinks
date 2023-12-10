const {Sequelize, Model} = require('sequelize');
require('dotenv').config();

const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
    logging: false,

});

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
    conex: sequelize
 };