
  import Reduce from "./code";

type ArrayType = {
    name: string;
    price: number;
}
const arr: ArrayType[] = [
    {
        name: "P1",
        price: 1,
    },
    {
        name: "P2",
        price: 3,
    },
    {
        name: "P3",
        price: 7,
    },
    {
        name: "P4",
        price: 6,
    },
    {
        name: "P5",
        price: 21,
    },
];

console.log(Reduce<ArrayType>(arr,(a,b) =>{
    return a * b.price;
},1))
  