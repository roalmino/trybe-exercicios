const books = require('./data');

function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((acc, cur) => {
    return acc.name.length > cur.name.length ? acc : cur;
  });
}

console.log(longestNamedBook());
