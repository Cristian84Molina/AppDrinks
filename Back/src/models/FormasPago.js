const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('formaspago', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1,
        },
        maneja_ctabanco: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
 
    },{tableName: 'formaspago'},
    { timestamps: true });

};
