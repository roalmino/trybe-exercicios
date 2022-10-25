//  ------------------------------  exercicios objeto
// let player = {
//   name: "Marta",
//   lastName: "Silva",
//   age: 34,
//   medals: ["golden", "silver"],
// };

// console.log(player.medals[1]);

//  ------------------------------  exercicios for/in e for/of
// let names = {
//   person1: "João",
//   person2: "Maria",
//   person3: "Jorge",
// };

// for (let pessoa in names) {
//   console.log("Olá " + names[pessoa]);
// }

// let car = {
//   model: "A3 Sedan",
//   manufacturer: "Audi",
//   year: 2020,
// };

// for (let key in car) {
//   console.log(key + " - " + car[key]);
// }

//  ------------------------------  exercicios funções
// let primeiroNum = 5;
// let segundoNum = 17;

// function soma(num1, num2) {
//   return num1 + num2;
// }
// function sub(num1, num2) {
//   return num1 - num2;
// }
// function mult(num1, num2) {
//   return num1 * num2;
// }
// function div(num1, num2) {
//   return num1 / num2;
// }
// function mod(num1, num2) {
//   return num1 % num2;
// }

// console.log(soma(primeiroNum, segundoNum));
// console.log(sub(primeiroNum, segundoNum));
// console.log(mult(primeiroNum, segundoNum));
// console.log(div(primeiroNum, segundoNum));
// console.log(mod(primeiroNum, segundoNum));

// function maiorNum(num1, num2) {
//   if (num1 > num2) {
//     console.log(num1 + " é maior que " + num2);
//   } else if (num1 < num2) {
//     console.log(num2 + " é maior que " + num1);
//   } else {
//     console.log("Os números são iguais");
//   }
// }

// // maiorNum(primeiroNum, segundoNum);

// let terceiroNum = 15;

// function maiorTres(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     console.log(num1 + " é maior que " + num2 + " e " + num3);
//   } else if (num2 > num1 && num2 > num3) {
//     console.log(num2 + " é maior que " + num1 + " e " + num3);
//   } else {
//     console.log(num3 + " é maior que " + num1 + " e " + num2);
//   }
// }

// maiorTres(primeiroNum, segundoNum, terceiroNum);

// function posNeg(num) {
//   if (num > 0) {
//     console.log("Número positivo");
//   } else if (num < 0) {
//     console.log("Número negativo");
//   } else {
//     console.log("Zero");
//   }
// }

// posNeg(0);

// function angulo(ang1, ang2, ang3) {
//   if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
//     console.log("Por favor, insira ângulos válidos.");
//   } else if (ang1 + ang2 + ang3 == 180) {
//     return console.log(true);
//   } else {
//     return console.log(false);
//   }
// }

// angulo(50, 50, 80);

//  ------------------------------  exercicios
// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };
// console.log("Bem vinda,", info[0].personagem);

// info.recorrente = "Sim";

// console.log(info);

// for (let key in info) {
//   console.log(key);
// }

// for (let key in info) {
//   console.log(info[key]);
// }

// let info2 = {
//   personagem: "Tio Patinhas",
//   origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178.",
//   nota: "O último MacPatinhas’",
//   recorrente: "Sim",
// };
// let info2 = ;

// console.log(info);

// for (let key in info) {
//   console.log(info[key] + " e " + info2[key]);
// }

// let leitor = {
//   nome: "Julia",
//   sobrenome: "Pessoa",
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: "O Pior Dia de Todos",
//       autor: "Daniela Kopsch",
//       editora: "Tordesilhas",
//     },
//   ],
// };

// console.log(
//   "O livro favorito de " +
//     leitor.nome +
//     " " +
//     leitor.sobrenome +
//     " se chama " +
//     leitor.livrosFavoritos[0].titulo
// );

// leitor.livrosFavoritos.push({
//   titulo: "Harry Potter e o Prisioneiro de Azkaban",
//   autor: "JK Rowling",
//   editora: "Rocco",
// });

// console.log(
//   leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos"
// );

//  ------------------------------  exercicios funções

// function palindromo(word) {
//   let reverse = "";
//   for (let index = word.length - 1; index >= 0; index -= 1) {
//     reverse += word[index];
//   }
//   if (word === reverse) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindromo("arara"));

// let teste = [2, 4, 6, 17, 10, 0, -3];

// function maior(list) {
//   indiceMaior = 0;
//   for (let index in list) {
//     if (list[index] > list[indiceMaior]) {
//       indiceMaior = index;
//     }
//   }
//   return indiceMaior;
// }

// console.log(maior(teste));

// let teste = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

// function maiorNome(list) {
//   maior = 0;
//   for (let index in list) {
//     if (list[index].length > list[maior].length) {
//       maior = index;
//     }
//   }

//   return list[maior];
// }

// console.log(maiorNome(teste));

// let teste = [5, 3, 2, 5, 8, 2, 5];

// function repete(list) {
//   let maior = 0;
//   let indexMaior = 0;
//   for (let index = 0; index < list.length; index += 1) {
//     let count = 0;
//     for (let indexB = 0; indexB < list.length; indexB += 1) {
//       if (list[index] === list[indexB]) {
//         count += 1;
//       }
//     }
//     if (count > maior) {
//       maior = count;
//       indexMaior = index;
//     }
//   }
//   return list[indexMaior];
// }

// console.log(repete(teste));

function somatorio(number) {
  let soma = 0;
  if (number < 0) {
    return console.log("Por favor, insira um número válido");
  } else {
    for (let index = 1; index <= number; index += 1) {
      soma += index;
    }
    return soma;
  }
}

console.log(somatorio(-5));
