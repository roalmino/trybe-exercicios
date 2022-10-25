const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

function adicionar(lessons, chave, valor) {
  lessons[chave] = valor;
}
adicionar(lesson2, "turno", "noite");

const showKeys = (lesson) => Object.keys(lesson);

// console.log(showKeys(lesson3));

const showSize = (lesson) => Object.keys(lesson).length;

// console.log(showSize(lesson3));

const showValues = (lesson) => Object.values(lesson);

// console.log(showValues(lesson2));

function allLessons() {
  let resul = {};
  resul.lesson1 = lesson1;
  resul.lesson2 = lesson2;
  resul.lesson3 = lesson3;
  return resul;
}

const licoes = allLessons();

function total(lessons) {
  const keys = Object.keys(lessons);
  let total = 0;
  for (let item of keys) {
    total += lessons[item].numeroEstudantes;
  }
  return total;
}

// console.log(total(licoes));

function getValueByNumber(lesson, index) {
  let list = Object.keys(lesson);
  return lesson[list[index]];
}

// console.log(getValueByNumber(lesson2, 0));

function verifyPair(lesson, chave, valor) {
  return (
    Object.values(lesson).includes(valor) && Object.keys(lesson).includes(chave)
  );
}

console.log(verifyPair(lesson1, "materia", "Matemática"));
