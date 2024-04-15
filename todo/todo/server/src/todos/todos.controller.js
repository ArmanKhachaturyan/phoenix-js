import todosService from './todos.service.js';
import Todo from './todos.model.js';
class TodosController {
  async createTodo(req, res) {
    try {
      const { text } = req.body;
      if (!text) {
        return res.status(400).json({ error: 'Text field is required' });
      }
      const todo = await todosService.createTodo(text);
      res.status(201).json(todo);
    } catch (erorr) {
      console.log(erorr);
      res.status(500).json(erorr);
    }
  }
  async uptudete(req, res) {
    try {
      const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send(todo);
    } catch (erorr) {
      console.log(error);
      res.status(404).json(error);
    }
  }
  async delete(req, res) {
    try {
      const todo = await Todo.findByIdAndDelete(req.params.id);
      res.status(204).json(todo);
    } catch (erorr) {
      console.log(error);
      res.status(404).json(error);
    }
  }
}
export default new TodosController();
