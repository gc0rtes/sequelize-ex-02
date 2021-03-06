"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TodoLists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TodoLists.belongsTo(models.Users, { foreignKey: "userId" }), //"Users" is table name
        TodoLists.hasMany(models.todoItems, { foreignKey: "todoListId" }); //"todoItems" table's name
    }
  }
  TodoLists.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TodoLists",
    }
  );
  return TodoLists;
};
