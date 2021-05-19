TodoList belongsTo() User, User hasMany() TodoLists (we can have as many userId, from the same user, into TodoLists table)
TodoItem belongsTo() TodoList, TodoList hasMany() TodoItems (we can have as many todoListId, from the same list, into TodoItems table).

If we wanted to restrict the system so that Users can only have one TodoList we would change the second declaration on point 1. from hasMany() to hasOne().
