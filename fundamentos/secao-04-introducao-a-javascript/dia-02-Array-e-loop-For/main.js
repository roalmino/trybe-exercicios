// --------------------------- Praticando -------------------------
// let pizzas = ["Queijo", "Carne", "Palmito", "Portuguesa"];

// pizzas.unshift("Calabreza");
// let removidos = pizzas.splice(2, 2);

// // for (i = 0; i < pizzas.length; i++) {
// //   console.log(pizzas[i]);
// // }

// console.log("Os sabores removidos foram: " + removidos);

// --------------------------- exercícios de Arrays -------------------------
// let menu = ["Home", "Serviços", "Portfólio", "Links"];
// let menuServices = menu[1];

// console.log(menuServices);

// let index = menu.indexOf("Portfólio");
// console.log(index);

// menu.push("Contato");

// --------------------------- exercícios de For -------------------------
// let resultado = [];
// let tabuada = 2;
// for (i = 0; i <= 10; i++) {
//   resultado[i] = `2 x ${i} = ${tabuada * i} `;
// }

// console.log(resultado);

// --------------------------- exercícios de For -------------------------
// let names = ["João", "Maria", "Antônio", "Margarida"];
// for (let name of names) {
//   console.log(name.length);
// }

// --------------------------- exercícios -------------------------
let numbers = [5, 9, 3, 19, 70, 8, 101, 2, 35, 27];
let soma = 0;
let media = 0;
let maior = 0;
let impares = [];
let menor = numbers[0];

for (i = 0; i < numbers.length; i++) {
  soma = soma + numbers[i];
  media = soma / numbers.length;
}

console.log("A soma total é: " + soma);
console.log("A média aritmética é: " + media);

if (media > 20) {
  console.log("A média é maior que 20");
} else {
  console.log("A média é menor que 20");
}

for (index = 0; index < numbers.length; index++) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}
console.log("O maior valor é: " + maior);

for (index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 > 0) {
    impares.push(numbers[index]);
  }
}
console.log("Os números impares são: " + impares);

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}
console.log("O menor número é: " + menor);

let lista = [];
for (index = 1; index <= 25; index += 1) {
  lista[index] = `${index} dividido por 2 é ${index / 2}`;
  console.log(lista[index]);
}
