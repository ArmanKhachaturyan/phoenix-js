import express from "express";
import mongoose from "mongoose";
import todosRouter from './src/todos/todos.router.js'

mongoose.connect("mongodb://127.0.0.1:27017/testing-todolist");

const PORT = 3000;

const app = express();

app.use(express.json());


app.use('/todos', todosRouter);

app.listen(PORT, () => console.log("Server is running on port 3000"));
