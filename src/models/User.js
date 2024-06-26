const {Sequelize, QueryTypes, DataTypes} = require('sequelize');
let sequelize  = new Sequelize('sqlite:db.sqlite');

module.exports = sequelize.define ('User' , {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
     },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    }, { tableName: 'users', timestamps: false});
