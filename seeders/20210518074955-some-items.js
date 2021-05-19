"use strict";
//Here is the data we want to populate our table(s)
// npx sequelize-cli db:seed:all //Put data in
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "React JS",
          deadline: "",
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Brake the keepie-uppie World Record ",
          deadline: "before Champions League",
          todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Sequelize and Express",
          deadline: "this week also",
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "cucumber and pumpkins",
          deadline: "this week",
          todoListId: 3,
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
