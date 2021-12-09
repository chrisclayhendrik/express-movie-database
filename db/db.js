const { Sequelize, DataTypes, Model } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize("database", "username", "password", {
    dialect: "sqlite",
    storage: path.join(__dirname, "../db/database.sqlite"),
    logging: false
});

module.exports = { sequelize, DataTypes, Model };