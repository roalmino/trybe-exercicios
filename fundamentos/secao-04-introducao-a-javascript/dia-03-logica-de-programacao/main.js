// ----------------- fatorial

// let number = 10;
// let soma = 1;
// for (let index = 1; index <= number; index += 1) {
//   soma *= index;
// }

// console.log(soma);

// ----------------- inverter
// let word = "trybe";
// let invertida = [];
// for (let index = word.length - 1; index >= 0; index -= 1) {
//   invertida += word[index];
// }
// console.log(invertida);

// ----------------- maior/menor
// let array = ["java", "javascript", "python", "html", "css"];
// let maior = [];
// let menor = array[0];
// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > maior.length) {
//     maior = array[index];
//   }
//   if (array[index].length < menor.length) {
//     menor = array[index];
//   }
// }
// console.log("O menor nome é " + menor + " e o maior é " + maior);

// ----------------- números primos
// let number = 50;
// let primo = 0;

// for (indexA = 1; indexA <= number; indexA += 1) {
//   let counter = 0;
//   for (indexB = 1; indexB <= indexA; indexB += 1) {
//     if (indexA % indexB == 0) {
//       counter += 1;
//     }
//   }
//   if (counter == 2) {
//     primo = indexA;
//   }
// }

// console.log(primo);

// ----------------- exercicio bonus 1
// let n = 6;
// let c = "*";
// let resultado = [];

// for (let index = 0; index < n; index += 1) {
//   for (let indexB = 0; indexB < n; indexB += 1) {
//     resultado += c;
//   }
//   resultado += "\n";
// }
// console.log(resultado);

// ----------------- exercicio bonus 2
// let n = 6;
// let c = "*";
// let resultado = [];

// for (let index = 0; index < n; index += 1) {
//   for (let indexB = 0; indexB < index; indexB += 1) {
//     resultado += c;
//   }
//   resultado += "\n";
// }
// console.log(resultado);


// ----------------- exercicio bonus 3
// let n = 6;
// let c = "*";
// let resultado = [];
// let indexB = 0;

// for (let index = 0; index < n; index += 1) {
//   for (let indexC = n; indexC > indexB; indexC -= 1) {
//     resultado += " ";
//   }
//   for (indexB = 0; indexB < index; indexB += 1) {
//     resultado += c;
//   }
//   resultado += "\n";
// }
// console.log(resultado);


// ----------------- exercicio bonus 4
