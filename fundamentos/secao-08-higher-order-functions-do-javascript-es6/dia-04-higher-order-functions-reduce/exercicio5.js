const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const expectedResult = 20;

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, cur) => {
    let times = 0;
    cur.split('').forEach((letra) => {
      if (letra == 'a' || letra == 'A') times += 1;
    });
    return acc + times;
  }, 0);
}

console.log(containsA());
