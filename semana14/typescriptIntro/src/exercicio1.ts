/*
  a)

  const minhaString: string = 1;

  problem: Type '1' is not assignable to type 'string'
           O tipo '1' não é atribuível ao tipo 'string'
*/

/*
  b)

  const meuNumero: number | string = 1;
  const meuNumero: number | string = "1";
  const meuNumero: number | undefined = "a";
  const meuNumero: (number | string)[] = [1, "1", "a"];
*/

/*
  c)

  const person: { name: string; age: number } = {
    name: "Pedro",
    age: 32,
  };
*/

/*
  d)

  type person = {
    name: string;
    age: number;
  };

  const person1: person = {
    name: "Pedro",
    age: 32
  }

  const person2: person = {
    name: "Clara",
    age: 27
  }

  const person3: person = {
    name: "Duke",
    age: 1
  }
*/

/*
  e)
  
  enum CORES {
    VIOLETA = "Violeta",
    AZUL = "Azul",
    ANIL = "Anil",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho",
  }

  type arcoIris = {
    cor: CORES;
    posicaoFaixa: number;
  };

  const faixa1: arcoIris = {
    cor: CORES.VIOLETA,
    posicaoFaixa: 1,
  };

  const faixa2: arcoIris = {
    cor: CORES.AZUL,
    posicaoFaixa: 2,
  };

  const faixa3: arcoIris = {
    cor: CORES.ANIL,
    posicaoFaixa: 3,
  };

  const faixa4: arcoIris = {
    cor: CORES.VERDE,
    posicaoFaixa: 4,
  };

  const faixa5: arcoIris = {
    cor: CORES.AMARELO,
    posicaoFaixa: 5,
  };

  const faixa6: arcoIris = {
    cor: CORES.LARANJA,
    posicaoFaixa: 6,
  };

  const faixa7: arcoIris = {
    cor: CORES.VERMELHO,
    posicaoFaixa: 7,
  };
*/
