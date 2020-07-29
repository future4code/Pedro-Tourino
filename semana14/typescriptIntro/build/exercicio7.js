var Discounts;
(function (Discounts) {
    Discounts[Discounts["SUMMER"] = 0.05] = "SUMMER";
    Discounts[Discounts["WINTER"] = 0.1] = "WINTER";
    Discounts[Discounts["SWIMSUIT"] = 0.04] = "SWIMSUIT";
    Discounts[Discounts["UNDERWEAR"] = 0.07] = "UNDERWEAR";
})(Discounts || (Discounts = {}));
const calculateDiscount = (arr) => arr.reduce((acc, cur) => {
    const discountedProduct = Object.assign(Object.assign({}, cur), { discountPrice: cur.price *
            (1 - Discounts[cur.classification]) });
    acc.push(discountedProduct);
    return acc;
}, []);
const new1 = { name: "a", price: 10, classification: "BANHO" };
const new2 = { name: "b", price: 100, classification: "INVERNO" };
console.log(calculateDiscount([new1, new2]));
//# sourceMappingURL=exercicio7.js.map