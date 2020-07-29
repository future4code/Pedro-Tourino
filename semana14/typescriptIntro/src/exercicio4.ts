type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

// a) Executaria o comando tsc

// b) tsc src/

// c) Sim, usando o tsc sem parâmetros

/* 
  d) 
    incremental: Pelo que vi o tsc vai guardar informações de compilações anteriores e só irá compilar o que ainda não foi compilado.

    target: Estamos usando "es6", que não consta no arquivo mostrado no notion mas suponho que seja igual "ES2015".

    allowSyntheticDefaultImports: Parece interessante para continuarmos utilizando import como estavamos acostumados.
    
    outFile: Concatenar a saída em um único pode ser útil.
    
    diagnostics: Mostra várias informações da compilação, tempo total, por exemplo.
*/
