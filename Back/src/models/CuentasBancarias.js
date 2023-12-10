const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('cuentasbancarias', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        numero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        banco: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        active: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
 
    },{tableName: 'cuentasbancarias'},
    { timestamps: true });

};
