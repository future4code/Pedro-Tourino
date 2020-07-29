// a)

const minhaString: string = "a";
// const minhaString: string = 1;

// problem: Type '1' is not assignable to type 'string'
//          O tipo '1' não é atribuível ao tipo 'string'

console.log(minhaString);

/* ----------------------------------------------------------------- */

// b)

const meuNumero: number | string = 1;
// const meuNumero: number | string = "1";
// const meuNumero: number | undefined = "a";
// const meuNumero: (number | string)[] = [1, "1", "a"];

console.log(meuNumero);

/* ----------------------------------------------------------------- */

// c)

type person = {
  name: string;
  age: number;
  favoriteColor: CORES;
};

/* ----------------------------------------------------------------- */

// d) & e)

enum CORES {
  VIOLETA = "Violeta",
  INDIGO = "Indigo",
  AZUL = "Azul",
  VERDE = "Verde",
  AMARELO = "Amarelo",
  LARANJA = "Laranja",
  VERMELHO = "Vermelho",
}

const person1: person = {
  name: "Pedro",
  age: 32,
  favoriteColor: CORES.AZUL,
};

const person2: person = {
  name: "Clara",
  age: 27,
  favoriteColor: CORES.AMARELO,
};

const person3: person = {
  name: "Duke",
  age: 1,
  favoriteColor: CORES.INDIGO,
};

console.log(CORES);
console.log(person1);
console.log(person2);
console.log(person3);
