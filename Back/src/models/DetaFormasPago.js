const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('detaformaspago', {
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
 
    },{tableName: 'detaformaspago'},
    { timestamps: true });

};
