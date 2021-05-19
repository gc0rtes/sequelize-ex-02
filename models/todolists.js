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
      TodoLists.belongsTo(models.Users, { foreignKey: "userId" }), //pay attention to TableName names: "TodoLists" and "Users"
        TodoLists.hasMany(models.todoItems);
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
