import { Sequelize } from "sequelize";

const db = new Sequelize("basic_node", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
