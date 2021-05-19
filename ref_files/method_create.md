The `.create` method we are regularly going to use in our routes.
This is used to insert data on our Tables on DB without using `seed`

Take the following code snippet:

const TodoItem = require("./models").todoItems; //pay attention here to the NameTable "todoItems"

    async function createSampleTodoItems() {
      try {
        const todo1 = await TodoItem.create({
          task: "Clean bedroom",
          important: false,
        });
        const todo2 = await TodoItem.create({
          task: "Learn to code",
          important: true,
        });
        const todo3 = await TodoItem.create({
          task: "Have fun",
          important: true,
        });

        return [todo1, todo2, todo3].map(item => item.toJSON());
      } catch (e) {
        console.error(e);
      }
    }

    createSampleTodoItems().then(todos => console.log(todos));

Save this in a file like `sample-data.js` and then run $
`node sample-data.js`
