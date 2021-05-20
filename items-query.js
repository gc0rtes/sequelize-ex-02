// This is how we can use a query method to get all the users from the database

const Items = require("./models").todoItems; //table name

async function getAllItems() {
  try {
    // Selects all rows. Resolves with a (possibly empty) array
    const allItems = await Items.findAll();
    return allItems.map((item) => item.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllItems().then((items) => console.log(items));

// to run: $ node name_of_file.js
