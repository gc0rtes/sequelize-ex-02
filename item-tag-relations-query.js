const { todoItems, tag } = require("./models"); //name of files!!!

//show a list of items and their tags
async function getListItemsTags() {
  try {
    const result = await todoItems.findAll({
      include: [tag],
    });
    return result.map((item) => item.toJSON());
  } catch (e) {
    console.log("error from try/catch", e);
  }
}
getListItemsTags().then((items) =>
  console.log("Items list with their tags: ", items)
);

//show a list of Tags with their lists
async function getTagsLists() {
  try {
    const result = await tag.findAll({
      include: [todoItems],
    });
    // return result.map((item) => item.toJSON());
    const myList = result.map((item) => item.toJSON());
    return myList[1];
  } catch (e) {
    console.log("error from try/catch", e);
  }
}
getTagsLists().then((items) =>
  console.log("List of Tags with their lists: ", items)
);

// to run: $ node name_of_file.js
