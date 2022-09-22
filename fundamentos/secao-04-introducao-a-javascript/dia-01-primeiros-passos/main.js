// ------------Exercícios de Variáveis

// const myName = "Rodrigo";
// const birthCity = "São Paulo";
// let birthYear = 1992;
// console.log(myName, birthCity, birthYear);

// birthYear = 2030;
// console.log(birthYear);
// birthCity = "Rio de Janeiro";

// -----------Exercícios de Tipos Primitivos
// const base = 5;
// let height = 8;
// const area = base * height;
// const perimeter = base * 2 + height * 2;
// const p = 2 * (base + height);
// console.log(area, perimeter, p);

// -----------Exercícios de Condições if/else
// const nota = 42;

// if (nota >= 80) {
//   console.log("Parabéns, você foi aprovado");
// } else if (nota >= 60 && 80) {
//   console.log("Você está na nossa lista de espera");
// } else {
//   console.log("Você foi reprovado");
// }

// -----------Exercícios de Operadores lógicos
// const h = new Date();
// const currentHour = h.getHours();
// let message;

// if (currentHour >= 22) {
//   message = "Não deveríamos comer nada, é hora de dormir";
// } else if (currentHour >= 18 && 22) {
//   message = "Rango da noite, vamos jantar :D";
// } else if (currentHour >= 14 && 18) {
//   message = "Vamos fazer um bolo pro café da tarde?";
// } else if (currentHour >= 11 && 14) {
//   message = "Hora do almoço!";
// } else {
//   message = "Hm,  cheiro de café recém passado";
// }

// console.log(message);

// -----------Exercícios de Switch e Case
// let resultado = "esperas";

// switch (resultado) {
//   case "aprovado":
//     console.log("Parabéns, você foi aprovado");
//     break;

//   case "espera":
//     console.log("Você está na lista de espera");
//     break;

//   case "reprovado":
//     console.log("Você foi reprovado");
// }

// -----------Exercícios Programados

// let a = 0;
// let b = 35;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// if (a > b) {
//   console.log(a);
// } else {
//   console.log(b);
// }

// let c = 35;

// if (c >= b && c >= a) {
//   console.log(c);
// } else if (b >= c && b >= a) {
//   console.log(b);
// } else {
//   console.log(a);
// }

// if (a > 0) {
//   console.log("positive");
// } else if (a < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// }

// let angulo1 = 40;
// let angulo2 = 50;
// let angulo3 = 80;

// if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
//   console.log("Ângulo inválido");
// } else if (angulo1 + angulo2 + angulo3 == 180) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let peca = "cAvaLa";
// let p = peca.toLowerCase();

// switch (true) {
//   case p == "peão":
//     console.log(`${peca} anda para frente uma casa por vez`);
//     break;

//   case p == "cavalo":
//     console.log(`${peca} anda 4 casas por vez em forma de L`);
//     break;

//   default:
//     console.log("Digite uma peça válida");
// }

// const a = 2;
// const b = 4;
// const c = 6;

// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let custo = 100;
// let preco = 150;
// let lucro;
// let vendas = 1;

// lucro = vendas * preco - custo * 1.2 * vendas;
// console.log(lucro);

let salarioBruto = 2000;
let salarioLiquido;

// calculo do INSS
if (salarioBruto > 5189.82) {
  salarioINSS = salarioBruto - 570.88;
} else if (salarioBruto >= 2594.93 && 5189.82) {
  salarioINSS = salarioBruto - salarioBruto * 0.11;
} else if (salarioBruto >= 1556.95 && 2594.92) {
  salarioINSS = salarioBruto - salarioBruto * 0.09;
} else {
  salarioINSS = salarioBruto - salarioBruto * 0.08;
}

// calculo IR
if (salarioINSS > 4664.68) {
  salarioLiquido = salarioINSS - salarioINSS * 0.275 - 869.36;
} else if (salarioINSS >= 3751.06 && 4664.68) {
  salarioLiquido = salarioINSS - (salarioINSS * 0.225 - 636.13);
} else if (salarioINSS >= 2826.66 && 3751.05) {
  salarioLiquido = salarioINSS - (salarioINSS * 0.15 - 354.8);
} else if (salarioINSS >= 1903.99 && 2826.65) {
  salarioLiquido = salarioINSS - (salarioINSS * 0.075 - 142.8);
} else {
  salarioLiquido = salarioINSS;
}

console.log(salarioINSS);
console.log(`O valor do salário líquido é ${salarioLiquido}`);
