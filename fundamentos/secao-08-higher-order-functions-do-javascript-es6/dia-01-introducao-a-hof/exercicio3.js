const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function calculaPontos(rAnswers, sAnswers, verifica) {
  let pontos = 0;

  for (let index = 0; index < sAnswers.length; index += 1) {
    const resp = verifica(rAnswers[index], sAnswers[index]);
    console.log(resp);
    pontos += resp;
  }
  return pontos;
}

const verificaAnswers = (r, s) => {
  if (r === s) {
    return 1;
  } else if (s === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
};

console.log(calculaPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, verificaAnswers));
