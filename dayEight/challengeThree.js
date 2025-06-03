// Challenge 3 — Passing Object as Parameter
// ✅ Write a function displayBook(book) that takes an object book with:

// title, author, and year
// and prints:

let books = {
  title: "HELLO WORLD",
  author: "AVINASH",
  year: 2023,
};

let displayBook = (book) => {
    return console.log(`Book = ${book.title} | author = ${book.author}`);
};


displayBook(books);
