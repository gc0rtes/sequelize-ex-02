"use strict";
//Here is the data we want to populate our table(s)
// npx sequelize-cli db:seed:all //Put data in
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "TodoLists",
      [
        {
          name: "Guilherme's Work List",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Messi personal list",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Todo this week",
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
