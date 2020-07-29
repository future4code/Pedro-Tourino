const minhaString = "a";
console.log(minhaString);
const meuNumero = 1;
console.log(meuNumero);
var CORES;
(function (CORES) {
    CORES["VIOLETA"] = "Violeta";
    CORES["INDIGO"] = "Indigo";
    CORES["AZUL"] = "Azul";
    CORES["VERDE"] = "Verde";
    CORES["AMARELO"] = "Amarelo";
    CORES["LARANJA"] = "Laranja";
    CORES["VERMELHO"] = "Vermelho";
})(CORES || (CORES = {}));
const person1 = {
    name: "Pedro",
    age: 32,
    favoriteColor: CORES.AZUL,
};
const person2 = {
    name: "Clara",
    age: 27,
    favoriteColor: CORES.AMARELO,
};
const person3 = {
    name: "Duke",
    age: 1,
    favoriteColor: CORES.INDIGO,
};
console.log(CORES);
console.log(person1);
console.log(person2);
console.log(person3);
//# sourceMappingURL=exercicio1.js.map