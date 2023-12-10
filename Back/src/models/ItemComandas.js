const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('itemcomandas', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        anulado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        preciocosto: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
        valorunitario: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        }, 
        impuesto: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
 
    },{tableName: 'itemcomandas'},
    { timestamps: true });

};
