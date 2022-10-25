const sorteio = (apost, check) => check(apost);

function verifica(number) {
  const ale = Math.ceil(Math.random() * 5);

  if (number == ale) return 'Ganhou';
  else return 'Tente novamente';
}

console.log(sorteio(5, verifica));
