const books = require('./data');

function averageAge() {
  // escreva seu código aqui
  let ages = books
    .map((book) => {
      return book.releaseYear - book.author.birthYear;
    })
    .reduce((acc, cur) => acc + cur);

  return ages / books.length;
}

console.log(averageAge());
