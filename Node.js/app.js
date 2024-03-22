const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.json());
const PORT = 5000;

app.use(express.json());

function readBooksFromFile() {
  try {
    const data = fs.readFileSync("books.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading books data from file:", error);
    return [];
  }
}
let books = readBooksFromFile();

let newid = books.length;

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

app.post("/books", (req, res) => {
  const { title, author, status } = req.body;
  const newBook = { id: newid++, title, author, status };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, status } = req.body;
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = { ...books[index], title, author, status };
    res.status(200).json(books[index]);
  } else {
    res.status(404).send("Book not found");
  }
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send("Book not found");
  }
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.send(400).send("Someting broke!");
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
