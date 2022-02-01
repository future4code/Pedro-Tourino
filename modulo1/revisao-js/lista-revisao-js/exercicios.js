// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
const numeros1 = [3, 2, 1, 4, 7];
function retornaTamanhoArray(array) {
  return array.length;
}
console.log(retornaTamanhoArray(numeros1));

// EXERCÍCIO 02
const numeros2 = [8, 23, 16, 10];
function retornaArrayInvertido(array) {
  return array.reverse();
}
console.log(retornaArrayInvertido(numeros2));

// EXERCÍCIO 03
const numeros3 = [3, 2, 1, 4, 7];
function retornaArrayOrdenado(array) {
  return array.sort();
}
console.log(retornaArrayOrdenado(numeros3));

// EXERCÍCIO 04
const numeros4 = [1, 2, 3, 4, 5, 6];
function retornaNumerosPares(array) {
  if (array % 2 === 0) return array;
}
const numerosPares1 = numeros4.filter(retornaNumerosPares);
console.log(numerosPares1);

// EXERCÍCIO 05
const numeros5 = [1, 2, 3, 4, 5, 6];
function retornaNumerosParesElevadosADois(array) {
  if (array % 2 === 0) return array;
}
const numerosPares2 = numeros4.filter(retornaNumerosParesElevadosADois);
const numerosParesAoQuadrado = numerosPares2.map((array) => {
  return Math.pow(array, 2);
});
console.log(numerosParesAoQuadrado);

// EXERCÍCIO 06
function retornaMaiorNumero(array) {}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
