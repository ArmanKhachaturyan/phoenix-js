const express = require("express");
const app = express();
const fs = require("fs");

const PORT = 8000;

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

function writeBooksFromFile() {
  try {
    fs.writeFile(
      "books.json",
      JSON.stringify(books, null, 2),
      "utf-8",
      (err) => {
        if (err) {
          console.log("Error writhing books data to file:", err);
        } else {
          console.log("Books data has been successfully written to file");
        }
      }
    );
  } catch (error) {
    console.error("Error writing books data to file:", error);
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
  writeBooksFromFile(), res.status(201).json(newBook);
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
