const User = require("./models").Users; //pay attention here to the NameTable "todoItems"

async function createNewUser() {
  try {
    const user1 = await User.create({
      name: "Born From Query",
      email: "born@from.query.com",
      phone: 0005060455,
      password: "12355",
    });
    return user1.toJSON();
  } catch (e) {
    console.error(e);
  }
}

createNewUser().then((user) => console.log(user));

// Run the code with: $ node sample-data.js
