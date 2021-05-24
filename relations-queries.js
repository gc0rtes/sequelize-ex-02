//Reader queries: https://reader.codaisseur.com/courses/backend-bootcamp/02-orm/relations/querying-relations

//Aswers: https://github.com/Codaisseur/course-content-exercises/blob/master/week-5/sequelize-day2-day3/relation-queries.js

const { Users, TodoLists, todoItems } = require("./models"); //name of tables

async function listsWithUsers() {
  const lists = await TodoLists.findAll({
    include: [Users],
  });
  return lists.map((list) => list.toJSON());
}
listsWithUsers().then((lists) =>
  console.log("todo List with all user data:", lists)
);

//  If we wanted to ONLY include the NAME of our Users with the lists we could change the function above to:
async function listsWithNameUsers() {
  const lists = await TodoLists.findAll({
    include: { model: Users, attributes: ["name"] },
  });
  // return lists.map((list) => list.toJSON());
  return lists.map((list) => list.get({ plain: true })); //plain:true show only the object itself
}
listsWithNameUsers().then((lists) =>
  console.log("todo List with just user name:", lists)
);

//Show a list of users with the name of their todo lists. Console.log has a limitation and dont go deeper to show the lists names inside the array.
// to get the first element of the array and see all the data:
// const myHouse = houses.map(data => data.toJSON())
// return myHouse[0]

async function getUsers() {
  const allUsersWithLists = await Users.findAll({
    include: { model: TodoLists, attributes: ["name"] },
  });
  return allUsersWithLists.map((user) => user.toJSON());
}

getUsers().then((users) =>
  console.log("users with the name of their todo lists:", users)
);

//Get one user by id with his lists

async function userByIdTodoLists(id) {
  const result = await Users.findByPk(id, {
    include: [TodoLists],
  });
  return result.toJSON();
}
userByIdTodoLists(4).then((user) =>
  console.log("user by id with his lists:", user)
);

//Get important TodoItems with the name of the list they belong to.

async function getImportantItems() {
  const result = await todoItems.findAll({
    where: { important: true },
    include: { model: TodoLists, attributes: ["name"] },
  });
  return result.map((item) => item.toJSON());
}
getImportantItems().then((items) =>
  console.log(
    "Important TodoItems with the name of the list they belong to: ",
    items
  )
);

// Get one user by id with his lists, which also contain their belonging TodoItem's task attribute.

async function getUserByIdListsAndTaks(id) {
  const result = await Users.findByPk(id, {
    include: [
      {
        model: TodoLists,
        attributes: ["name"],
        include: { model: todoItems, attributes: ["task"] },
      },
    ],
  });
  return result.toJSON();
}
getUserByIdListsAndTaks(3).then((users) =>
  console.log("User by id with his lists and TodoItem task name: ", users)
);

// to run: $ node name_of_file.js
