// We are going to use this migration to add the necessary columns to our models in order to tie our data together as we want to.
// One important thing to remember when establishing associations is that it's not enough with just adding the necessary columns in, we also have to specify them in our models!

//We are creating the column "userId" into the table "TodoLists" on our database

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "TodoLists", // table name
      "userId", // new field name
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    ),
      await queryInterface.addColumn(
        "todoItems", // table name
        "todoListId", // new field name
        {
          type: Sequelize.INTEGER,
          references: {
            model: "TodoLists", // table name
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        }
      );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("TodoLists", "userId"),
      await queryInterface.removeColumn("todoItems", "todoListId");
  },
};
