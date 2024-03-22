import { sequelize } from "../../db/index";

import { DataTypes } from "sequelize";

export const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  username: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING,
  },

  address: {
    type: DataTypes.JSON,
  },

  phone: {
    type: DataTypes.STRING,
  },

  website: {
    type: DataTypes.STRING,
  },

  company: {
    type: DataTypes.JSON,
  },
});

User.sync().then(() => {
  console.log("User Model synced");
});
