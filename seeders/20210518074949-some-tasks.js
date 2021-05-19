//Here is the data we want to populate our table(s)
// npx sequelize-cli db:seed:all

"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "TodoLists",
      [
        {
          name: "Guilherme's Code List to learn",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Messi personal list",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Buy some grosseries",
          userId: 3,
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
