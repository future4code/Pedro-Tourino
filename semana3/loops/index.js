/*
  EXERCÍCIO 1

  Declara uma variável soma iniciando com o valor 0, entra em um loop que soma a variável com o indice 14 vezes, e após sair do loop imprime o valor final de 105.

  EXERCÍCIO 2

  a. Adiciona(empurra) um elemento ao final de um array.

  b. (4) [10, 15, 25, 30] - onde (4) = length e [10, 15, 25, 30] = array salva dentro da variável novaLista.

  c. numero com valor 3: (6) [12, 15, 18, 21, 27, 30]
     numero com valor 4: [12]
*/

// EXERCÍCIO 3

// a.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let max = array[0];
let mim = array[0];

for (let i = 0; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i];
  } else if (mim > array[i]) {
    mim = array[i];
  }
}

console.log(`O maior número é ${max} e o menor é ${mim}`);

// b.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let arrayDividedValues = [];

for (let i = 0; i < array.length; i++) {
  arrayDividedValues[i] = array[i] / 10;
}

console.log(arrayDividedValues);

// c.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let arrayEvenValues = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    arrayEvenValues.push(array[i]);
  }
}

console.log(arrayEvenValues);

// d.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

for (let i = 0; i < array.length; i++) {
  console.log(`O elemento do índex ${i} é ${array[i]}`);
}

/*
  DESAFIO 1

  0
  00
  000
  0000
*/

// DESAFIO 2
