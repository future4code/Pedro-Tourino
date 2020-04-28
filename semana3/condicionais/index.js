/* 
  ---------- EXERCÍCIO 1 ----------

  Pede o usuário que entre com o valor que deseja testar, converte texto (String) de entrada em número (Number), entra em uma função condicional SE (if) que divide o valor de entrada com operador de módulo (%) para pegar o resto da divisão e conferir se o valor é par, e caso seja, imprime no console o texto (String) "Passou no teste.", e caso o valor não seja par e sim ímpar, imprime no console o texto (String) "Não passou no teste.".



  ---------- EXERCÍCIO 2 ----------

  a. Para o usuário entrar com o valor que deseja e então ter retorno do preço da opção escolhida.
  
  b. O preço da fruta Maçã é R$ 2.25
  
  c. O valor a ser pago seria de R$9,55, sendo que as 3 bananas sairiam com o valor de R$0,00 já que não existe a opção.
  
  d. O preço da fruta  Pêra  é  R$  5



  ---------- EXERCÍCIO 3 ----------

  Mensagem de erro especificando que a variável "mensagem" não está definida no escopo geral, somente dentro do bloco condicional, não podendo ser acessada para poder ser impressa no final no código.
*/

// ---------- EXERCÍCIO 4 ----------

// a.
let primeiroNumero = prompt("Digite o primeiro número:");
let segundoNumero = prompt("Digite o segundo número:");

primeiroNumero = Number(primeiroNumero);
segundoNumero = Number(segundoNumero);

if (primeiroNumero > segundoNumero) {
  console.log(primeiroNumero + ", " + segundoNumero);
} else {
  console.log(segundoNumero + ", " + primeiroNumero);
}

// Descrição do caso de igualdade dos números: Supondo que a entrada dos dois valores seja "3" a impressão seria "3, 3".

// b.
let primeiroNumero = prompt("Digite o primeiro número:");
let segundoNumero = prompt("Digite o segundo número:");
let terceiroNumero = prompt("Digite o terceiro número:");

primeiroNumero = Number(primeiroNumero);
segundoNumero = Number(segundoNumero);
terceiroNumero = Number(terceiroNumero);

if (primeiroNumero > segundoNumero && segundoNumero > terceiroNumero) {
  console.log(primeiroNumero + ", " + segundoNumero + ", " + terceiroNumero);
} else if (primeiroNumero > terceiroNumero && terceiroNumero > segundoNumero) {
  console.log(primeiroNumero + ", " + terceiroNumero + ", " + segundoNumero);
} else if (segundoNumero > primeiroNumero && primeiroNumero > terceiroNumero) {
  console.log(segundoNumero + ", " + primeiroNumero + ", " + terceiroNumero);
} else if (segundoNumero > terceiroNumero && terceiroNumero > primeiroNumero) {
  console.log(segundoNumero + ", " + terceiroNumero + ", " + primeiroNumero);
} else if (terceiroNumero > primeiroNumero && primeiroNumero > segundoNumero) {
  console.log(terceiroNumero + ", " + primeiroNumero + ", " + segundoNumero);
} else {
  console.log(terceiroNumero + ", " + segundoNumero + ", " + primeiroNumero);
}

// Descrição do caso de igualdade dos números: Supondo que a entrada dos três valores seja "3" a impressão seria "3, 3, 3".

// c.
