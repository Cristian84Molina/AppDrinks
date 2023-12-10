const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('transacciones', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        anulado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        tipo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        valor: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        }
 
    },{tableName: 'transacciones'},
    { timestamps: true });

};
