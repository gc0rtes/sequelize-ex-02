"use strict";
//Here is the data we want to populate our table(s)
// npx sequelize-cli db:seed:all //Put data in
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "lavar louca",
          deadline: "segunda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "arruma casa",
          deadline: "quinta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "compras no mercado",
          deadline: "quarta",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
