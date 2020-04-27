/*
  1. Exercícios de interpretação de código

  -- Exercício 01: --

  a. false
  b. false
  c. true
  d. false
  e. boolean

  -- Execício 02: --

  a. Array é uma matriz.
     Declaração: let nomeMatriz = [valor1, valor2, valor3, ...];

  b. Índice [0].

  c. nomeMatriz.length.

  d. I.  undefined
     II.  null
     III.  11
     IV.  3  e  4
     V.  19  e  9
     VI.  3
     VII.  1 
*/

// ------------------------------------------------------------------------------

// 2. Exercícios de escrita de código

// -- Exercício 01: --

// a.
const fahrenheit = 77;
const kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;

console.log(kelvin + "°K");

// b.
const celsius = 80;
const fahrenheit = (celsius * 9 / 5) + 32;

console.log(fahrenheit + "°F");

// c.
const celsius = 30;
const fahrenheit = (celsius * 9 / 5) + 32;
const kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;

console.log(fahrenheit + "°F e " + kelvin + "°K");
console.log(fahrenheit + "°F");
console.log(kelvin + "°K");

// d.
let celsius = prompt("Entre com um valor:");
const fahrenheit = (celsius * 9 / 5) + 32;
const kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;

console.log(fahrenheit + "°F e " + kelvin + "°K");
console.log(fahrenheit + "°F");
console.log(kelvin + "°K");

// -- Exercício 02: --

let nome = prompt("1. Qual o seu nome?");
let idade = prompt("2. Qual sua idade?");
let altura = prompt("3. Qual sua altura?");
let peso = prompt("4. Qual seu peso?");
let etnia = prompt("5. Qual sua etnia?");

console.log("Resposta: " + nome);
console.log("Resposta: " + idade + " anos");
console.log("Resposta: " + altura + "m");
console.log("Resposta: " + peso + "kg");
console.log("Resposta: " + etnia);

// -- Exercício 03: --

// a.
const consumo = 280;
const tarifa = 0.05;
const valorDevido = (consumo * tarifa);

console.log("Valor a ser pago: R$" + valorDevido);

// b.
const consumo = 280;
const tarifa = 0.05;
const valorInicial = consumo * tarifa;
const desconto = (15 / 100) * valorInicial;
const valorFinal = valorInicial - desconto;

console.log("Valor a ser pago: R$" + valorFinal);
