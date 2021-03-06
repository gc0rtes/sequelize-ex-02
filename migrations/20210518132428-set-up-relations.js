// We are going to use this migration to add the necessary columns to our models in order to tie our data together as we want to.
// One important thing to remember when establishing associations is that it's not enough with just adding the necessary columns in, we also have to specify them in our models!

//We are creating the column "userId" into the table "TodoLists" on our database

//Obs: camelCase the 'Id' is the standart model style for a Foreing Key.
//Take the name of the table in sigular and put Id at the end.
//Ex: 'userId' and 'listId' is ok. But 'todoListId' is bad.

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //setup the TodoLists table
    await queryInterface.addColumn(
      "TodoLists", // table name
      "userId", // new column added called "userId". It'll store the "Users" id PK.
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
      //setup the "todoItems" table
      await queryInterface.addColumn(
        "todoItems", // table name
        "todoListId", // new column name. this name is bad. better: 'listId'
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
