// Problem 1

const groceryStore = {
  storeName: "FreshFoods Mart",
  location: "Cityville",
  products: {
    fruitsSection: {
      inventory: {
        apple: { available: 50, price: 2 },
        banana: { available: 30, price: 1 },
        orange: { available: 40, price: 3 },
      },
      sales: [
        { id: 1, items: ["apple", "banana"], total: 3 },
        { id: 2, items: ["orange", "banana"], total: 4 },
        { id: 3, items: ["apple", "orange"], total: 5 },
      ],
    },
    vegetableAisle: {
      inventory: {
        carrot: { available: 25, price: 1.5 },
        broccoli: { available: 20, price: 2 },
        spinach: { available: 15, price: 1.8 },
      },
      sales: [
        { id: 1, items: ["carrot", "broccoli"], total: 3.5 },
        { id: 2, items: ["spinach", "carrot"], total: 2.8 },
        { id: 3, items: ["broccoli"], total: 2 },
      ],
    },
  },
  sectionNames: ["fruitsSection", "vegetableAisle"],
};

// Level-Problem 1-1
function findDetails(groceryStore) {
  //write your code here...
  let ans = {};
  let {
    products: {
      fruitsSection: {
        inventory: {
          apple: { available: appleAvailable, price: applePrice },
        },
      },
      vegetableAisle: {
        inventory: {
          carrot: { available: carrotAvailable, price: carrotPrice },
        },
      },
    },
  } = groceryStore;
  ans = { appleAvailable, carrotAvailable, applePrice, carrotPrice };
  return ans;
}
// console.log(findDetails(groceryStore).appleAvailable); // 50
// console.log(findDetails(groceryStore).carrotAvailable); // 25
// console.log(findDetails(groceryStore).applePrice); // 2
// console.log(findDetails(groceryStore).carrotPrice); // 1.5

// Level-Problem 1-2
function calculateTotalRevenue(groceryStore) {
  //write your code here...
  let {
    products: {
      fruitsSection: { sales: first },
      vegetableAisle: { sales: second },
    },
  } = groceryStore;
  let sum = 0;
  for (var i of first) {
    let { total } = i;
    sum += total;
  }
  for (var j of second) {
    let { total } = j;
    sum += total;
  }
  return `Total Revenue: ${sum}`;
}
// console.log(calculateTotalRevenue(groceryStore)); Total Revenue: 20.3 = (3 + 4 + 5 + 3.5 + 2.8 + 2)

//don't remove below export statement part
export { findDetails, calculateTotalRevenue };
