const { Users, TodoLists, todoItems } = require("./models"); //name of files inside /models folder not TableName?

async function listsWithUsers() {
  const lists = await TodoLists.findAll({
    include: [Users],
  });

  return lists.map((list) => list.toJSON());
}

listsWithUsers().then((lists) => console.log(lists));

//`include` can take an array of models and will return the associated rows inside the result of what you're querying for, in this case todoLists.

// to run: $ node name_of_file.js

//Reader queries: https://reader.codaisseur.com/courses/backend-bootcamp/02-orm/relations/querying-relations
