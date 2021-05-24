const Users = require("./models").Users;

//Delete User
async function deleteUserById(id) {
  try {
    // first we find him
    const result = await Users.findByPk(id);
    console.log("What user to delete?", result.name);
    // once we have him, we delete him
    await result.destroy();
  } catch (e) {
    console.log("error from try/catch", e);
  }
}
deleteUserById(10);

// to run: $ node name_of_file.js
