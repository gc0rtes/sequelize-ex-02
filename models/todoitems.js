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
      todoItems.belongsTo(models.TodoLists, { foreignKey: "todoListId" }); //"TodoLists is the table name"
      todoItems.belongsToMany(
        models.tag, //'tag' model file's name
        {
          through: "itemTags", //"itemTags" file's name
          foreignKey: "todoItemId", //Foreign key in the 'itemTags' table
        }
      );
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
