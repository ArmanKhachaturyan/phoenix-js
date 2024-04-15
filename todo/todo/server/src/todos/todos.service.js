import Todo from "./todos.model.js";

class todosService {
    async createTodo(text) {
        const todo = new Todo({text});
        await todo.save();
        return todo;
    }
}

export default new todosService()