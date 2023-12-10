const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('cierrecaja', {
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
        baseinicial: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        },
        saldoefectivo: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: 0,
        }
 
    },{tableName: 'cierrecaja'},
    { timestamps: true });

};
