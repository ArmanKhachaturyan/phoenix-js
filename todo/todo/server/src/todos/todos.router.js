import { Router } from 'express';
import todosController from './todos.controller.js';

const router = Router();

router.get('/', async (req, res) => {
  res.send('todos');
});

router.post('/', todosController.createTodo);

router.put('/:id', todosController.uptudete);

router.delete('/:id', todosController.delete);

export default router;
