const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('comandas', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        numero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bruto: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
        impuesto: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
        neto: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
        anulado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
 
    },{tableName: 'comandas'},
    { timestamps: true });

};
