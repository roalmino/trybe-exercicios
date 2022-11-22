const books = require('./data');
// Adicione o código do exercício aqui:

// const red = books.reduce((acc, cur) => {
//   acc.author.name += `, ${cur.author.name}`;
//   return acc;
// }).author.name;

// console.log(red);

function reduceNames() {
  return books.reduce((acc, book) => `${acc} ${book.author.name}.`, '');
}

console.log(reduceNames());
