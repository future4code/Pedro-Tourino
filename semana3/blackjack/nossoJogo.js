/**
  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
  * 
  * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
  * 
  * 
  * 
**/

console.log("Bem vindo ao jogo de Blackjack!");

if (confirm("Deseja iniciar uma rodada?")) {
  let user = [];
  let computer = [];

  for (let i = 0; i < 2; i++) {
    user[i] = comprarCarta();
    computer[i] = comprarCarta();
  }

  user.texto = `${user[0].texto} ${user[1].texto}`;
  user.valor = user[0].valor + user[1].valor;

  computer.texto = `${computer[0].texto} ${computer[1].texto}`;
  computer.valor = computer[0].valor + computer[1].valor;

  console.log(`Usuário - cartas: ${user.texto} - pontuação ${user.valor}`);
  console.log(
    `Computador - cartas: ${computer.texto} - pontuação ${computer.valor}`
  );

  if (user.valor > computer.valor) {
    console.log("O usuário ganhou!");
  } else if (user.valor < computer.valor) {
    console.log("O computador ganhou!");
  } else {
    console.log("Empate!");
  }
} else {
  console.log("O jogo acabou");
}
