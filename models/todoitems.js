"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todoItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      todoItems.belongsTo(models.TodoLists); //pay attention to TableName names: "TodoLists" and "Users"
    }
  }
  todoItems.init(
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "todoItems",
    }
  );
  return todoItems;
};
