// add this at the the top of your file in case you need to do a number operation like where height >= 175
//const { Op } = require("sequelize");

const Items = require("./models").todoItems; //table name

async function getImportantItems() {
  try {
    // Selects all rows. Resolves with a (possibly empty) array
    const importantItems = await Items.findAll({ where: { important: true } });
    return importantItems.map((item) => item.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getImportantItems().then((items) => console.log(items));

// to run: $ node name_of_file.js
