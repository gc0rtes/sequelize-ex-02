// This is how we can use a query method to get all the users from the database

const User = require("./models").Users; //pay attention to your TABLE NAME inside e.g. migrations/file 'queryInterface.createTable("Users")'

async function getAllUsers() {
  try {
    // Selects all rows. Resolves with a (possibly empty) array
    const allUsers = await User.findAll();
    return allUsers.map((user) => user.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllUsers().then((users) => console.log(users));
