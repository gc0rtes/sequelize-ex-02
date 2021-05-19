## Establishing Associations between tables

## 1. Generate a new migration

`npx sequelize-cli migration:generate --name set-up-relations`

We are going to use this migration to add the necessary columns to our models in order to tie our data together as we want to.

One important thing to remember when establishing associations is that it's not enough with just adding the necessary columns in, we also have to specify them in our **models**!

## 2. Open Models files to start the relation

2.1 Let's begin with the users => todoList **relation**.
Inside models/users.js add this:

    static associate(models) {
      user.hasMany(models.todoList);
    };

2.2 Inside models/todoLists.js add this:

    static associate(models) {
      todoList.belongsTo(models.user);
    };

## 3. Now back to our new migration file and let's declare those columns

We can see we are going to need a `userId` column in our `todoList` table, to tie lists to users

3.1 we are going to pass some extra information to `addColumn` so that sequelize understands that it's not just any type of column but one that **creates a relationship**.

Inside migrations/0000000-set-up-relations.js add:

      "use strict";

      module.exports = {
        up: async (queryInterface, Sequelize) => {
          await queryInterface.addColumn("todoLists", "userId", {
            type: Sequelize.INTEGER,
            references: {
              model: "users",
              key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
          });
        },
        down: async (queryInterface, Sequelize) => {
          await queryInterface.removeColumn("todoLists", "userId");
        },
      };
