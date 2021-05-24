// This is how we can use a query method to get all the users from the database

const User = require("./models").Users; //pay attention to your TABLE NAME inside e.g. migrations/file 'queryInterface.createTable("Users")'

async function getByPK(id) {
  try {
    // Selects all rows. Resolves with a (possibly empty) array
    const byPK = await User.findByPk(id);
    return byPK.toJSON();
  } catch (e) {
    console.log(e);
  }
}

getByPK(2).then((users) => console.log(users));

// to run: $ node name_of_file.js
