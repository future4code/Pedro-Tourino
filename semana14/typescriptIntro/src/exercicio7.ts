enum Discounts {
  SUMMER = 0.05,
  WINTER = 0.1,
  SWIMSUIT = 0.04,
  UNDERWEAR = 0.07,
}

type product = {
  name: string;
  price: number;
  classification: string;
};

type discountedProduct = {
  name: string;
  price: number;
  classification: string;
  discountPrice: number;
};

const calculateDiscount = (arr: product[]): discountedProduct[] =>
  arr.reduce((acc, cur) => {
    const discountedProduct: discountedProduct = {
      ...cur,
      discountPrice:
        cur.price *
        (1 - Discounts[cur.classification as keyof typeof Discounts]),
    };
    acc.push(discountedProduct);
    return acc;
  }, []);

const new1: product = { name: "a", price: 10, classification: "BANHO" };
const new2: product = { name: "b", price: 100, classification: "INVERNO" };

console.log(calculateDiscount([new1, new2]));
