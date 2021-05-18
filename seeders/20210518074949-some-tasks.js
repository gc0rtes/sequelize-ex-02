"use strict";
//Here is the data we want to populate our table(s)
// npx sequelize-cli db:seed:all //Put data in
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "TodoLists",
      [
        {
          name: "lavar louca",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "arruma casa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "compras no mercado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("TodoLists", null, {});
  },
};
