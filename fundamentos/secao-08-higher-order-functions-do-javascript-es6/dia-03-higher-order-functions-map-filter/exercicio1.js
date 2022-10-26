const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const newList = books.map(
  (book) => `${book.name} - ${book.genre} - ${book.author.name}`
);

// console.log(newList);

function nameAndAge() {
  const obj = books.map((book) => ({
    author: `${book.author.name}`,
    age: `${book.releaseYear - book.author.birthYear}`,
  }));
  return obj.sort((a, b) => a.age - b.age);
}

console.log(nameAndAge());

function fantasyOrScienceFiction() {
  return books.filter(
    (book) => book.genre == 'Fantasia' || book.genre == 'Ficção Científica'
  );
}

// console.log(fantasyOrScienceFiction());

function oldBooksOrdered() {
  // escreva seu código aqui
  const old = books.filter((book) => 2022 - book.releaseYear > 60);
  old.sort((a, b) => b.releaseYear - a.releaseYear);
  return old;
}

// console.log(oldBooksOrdered());

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const objs = books.filter(
    (book) => book.genre == 'Fantasia' || book.genre == 'Ficção Científica'
  );
  return objs.map((obj) => obj.author.name).sort();
}

// console.log(fantasyOrScienceFictionAuthors());

function authorWith3DotsOnName() {
  return books.filter((book) => book.author.name.split('.').length > 3);
}

// console.log(authorWith3DotsOnName());
