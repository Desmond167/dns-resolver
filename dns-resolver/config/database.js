import { Sequelize, DataTypes } from "sequelize";
import { Config } from "./config.js";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: Config.SQLITE_FILE
});

export { sequelize };