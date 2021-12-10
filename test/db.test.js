const { Sequelize } = require("sequelize");

describe("Sequelize class", () => {
  const sequelizeTest = new Sequelize("database", "username", "password", {
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: false,
  });
  test("sequelize is an instance of Sequelize", () => {
    expect(sequelizeTest).toBeInstanceOf(Sequelize);
  });
});
