//Problem 1
let customerArray = [
  {
    name: "Customer1",
    purchases: [
      { product: "Laptop", price: 1200 },
      { product: "Headphones", price: "80" },
      { product: "Mouse", price: "25" },
    ],
  },
  {
    name: "Customer2",
    purchases: [
      { product: "Smartphone", price: "600" },
      { product: "Charger", price: 15 },
      { product: "Tablet", price: "250" },
    ],
  },
];

function findTotalSpending(arr) {
  //write your code here...
  let ans = [];
  for (var obj of arr) {
    var totalSpending = 0;
    var { purchases } = obj;
    for (var j of purchases) {
      var { price } = j;
      totalSpending += Number(price);
    }
    ans.push({ ...obj, totalSpending });
  }
  return ans;
}

// //Example invocation
// console.log(findTotalSpending(customerArray));
// [
//   {
//     name: "Customer1",
//     purchases: [
//       { product: "Laptop", price: 1200 },
//       { product: "Headphones", price: "80" },
//       { product: "Mouse", price: "25" },
//     ],
//     totalSpending: 1305,
//   },
//   {
//     name: "Customer2",
//     purchases: [
//       { product: "Smartphone", price: "600" },
//       { product: "Charger", price: 15 },
//       { product: "Tablet", price: "250" },
//     ],
//     totalSpending: 865,
//   },
// ];

//Problem 2 - Array destructuring and spread operator

const employee = {
  name: "Alex",
  password: "securePass123",
  id: "3hj47p",
  city: "San Francisco",
};

function removeKeyValuePair(employee, keyToRemove) {
  const { [keyToRemove]: removeKey, ...newObj } = employee;
  return newObj;
}

//Example usage
//  console.log(removeKeyValuePair(employee, "city"));//{name: "Alex",password: "securePass123",id: "3hj47p"};

// Problem 3

let CityCategories = {
  1: "Metropolitan",
  2: "Residential",
};
let CityAreas = [
  { id: 1, name: "Downtown" },
  { id: 2, name: "Suburbs" },
];

let exampleCityArray = [
  {
    cityId: "NYC",
    cityName: "New York City",
    Category: 1,
    Area: 2,
    feature1: "Population",
    feature2: "Land Area",
    feature3: "Average Income",
    feature4: "Median Rent",
    feature5: "Tourist Attractions",
    feature6: "Public Transport",
    feature7: "Crime Rate",
    feature8: "",
    feature9: "",
    feature10: "",
    feature11: "",
    feature12: "",
    feature13: "",
    feature14: "",
    feature15: "",
    feature16: null,
    feature17: null,
    feature18: null,
    feature19: null,
    feature20: null,
    detail1: "8.4 million",
    detail2: "468.9 sq mi",
    detail3: "$62,183",
    detail4: "$2,500",
    detail5: ["Times Square", "Central Park"],
    detail6: "Subway, Buses",
    detail7: "Low",
    detail8: "",
    detail9: "",
    detail10: "",
    detail11: "",
    detail12: "",
    detail13: "",
    detail14: "",
    detail15: "",
    detail16: null,
    detail17: null,
    detail18: null,
    detail19: null,
    detail20: null,
  },
  {
    cityId: "LA",
    cityName: "Los Angeles",
    Category: 2,
    Area: 1,
    feature1: "Population",
    feature2: "Land Area",
    feature3: "Average Income",
    feature4: "Median Rent",
    feature5: "Tourist Attractions",
    feature6: "Public Transport",
    feature7: "Crime Rate",
    feature8: "",
    feature9: "",
    feature10: "",
    feature11: "",
    feature12: "",
    feature13: "",
    feature14: "",
    feature15: "",
    feature16: null,
    feature17: null,
    feature18: null,
    feature19: null,
    feature20: null,
    detail1: "3.8 million",
    detail2: "468.7 sq mi",
    detail3: "$58,651",
    detail4: "$2,300",
    detail5: ["Hollywood", "Santa Monica Pier"],
    detail6: "Buses, Metro Rail",
    detail7: "Moderate",
    detail8: "",
    detail9: "",
    detail10: "",
    detail11: "",
    detail12: "",
    detail13: "",
    detail14: "",
    detail15: "",
    detail16: null,
    detail17: null,
    detail18: null,
    detail19: null,
    detail20: null,
  },
];

//Example Invocation
let obj2 = massageArray(exampleCityArray);
// console.log(JSON.stringify(obj2));

function massageArray(inputArray) {
  //write your code here...
}

//don't remove below export statement part
export {
  findTotalSpending,
  removeKeyValuePair,
  exampleCityArray,
  massageArray,
};
