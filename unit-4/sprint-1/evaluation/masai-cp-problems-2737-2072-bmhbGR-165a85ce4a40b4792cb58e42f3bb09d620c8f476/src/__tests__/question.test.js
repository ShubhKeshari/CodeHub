import {
  findTotalSpending,
  removeKeyValuePair,
  exampleCityArray,
  massageArray,
} from "../question1";
import { findDetails, calculateTotalRevenue } from "../question2";

import {
  calculateAverageExamScore,
  findTopScorer,
  findPassingStudents,
  combiningArrays,
  mergingObjects,
  employeeInformation,
  averageSalary,
  destructuringToSwap,
  highestPaid,
  findFrequency,
} from "../question3";

global.score = 1;

///*********************************************************Test cases for question1.js */

describe("Problem-1", () => {
  const arr1 = findTotalSpending([
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
  ]);
  test("checking array totalSpending in array", () => {
    expect(Array.isArray(arr1)).toBe(true);
    expect(arr1[0].totalSpending).toBe(1305);
    expect(arr1[0].name).toBe("Customer1");
    expect(JSON.stringify(arr1[0].purchases)).toBe(
      JSON.stringify([
        { product: "Laptop", price: 1200 },
        { product: "Headphones", price: "80" },
        { product: "Mouse", price: "25" },
      ])
    );
    expect(arr1[1].totalSpending).toBe(865);
    expect(arr1[1].name).toBe("Customer2");
    expect(JSON.stringify(arr1[1].purchases)).toBe(
      JSON.stringify([
        { product: "Smartphone", price: "600" },
        { product: "Charger", price: 15 },
        { product: "Tablet", price: "250" },
      ])
    );
    global.score += 2;
  });
});

describe("Problem-2", () => {
  test("checking removeKeyValuePair in object", () => {
    const user = {
      name: "test",
      password: "test343",
      id: "dgjgg566",
      city: "GOA",
    };
    expect(removeKeyValuePair(user, "password").name).toBe("test");
    expect(removeKeyValuePair(user, "password").id).toBe("dgjgg566");
    expect(removeKeyValuePair(user, "password").city).toBe("GOA");
    expect(removeKeyValuePair(user, "password").password).toBe(undefined);

    global.score += 2;
  }); //2
});
describe("Problem-3", () => {
  let eo1 = [
    {
      cityId: "NYC",
      cityName: "New York City",
      Category: "Metropolitan",
      Area: "Suburbs",
      Features: [
        { Feature: "Population", Detail: "8.4 million" },
        { Feature: "Land Area", Detail: "468.9 sq mi" },
        { Feature: "Average Income", Detail: "$62,183" },
        { Feature: "Median Rent", Detail: "$2,500" },
        {
          Feature: "Tourist Attractions",
          Detail: ["Times Square", "Central Park"],
        },
        { Feature: "Public Transport", Detail: "Subway, Buses" },
        { Feature: "Crime Rate", Detail: "Low" },
      ],
    },
    {
      cityId: "LA",
      cityName: "Los Angeles",
      Category: "Residential",
      Area: "Downtown",
      Features: [
        { Feature: "Population", Detail: "3.8 million" },
        { Feature: "Land Area", Detail: "468.7 sq mi" },
        { Feature: "Average Income", Detail: "$58,651" },
        { Feature: "Median Rent", Detail: "$2,300" },
        {
          Feature: "Tourist Attractions",
          Detail: ["Hollywood", "Santa Monica Pier"],
        },
        { Feature: "Public Transport", Detail: "Buses, Metro Rail" },
        { Feature: "Crime Rate", Detail: "Moderate" },
      ],
    },
  ];

  let exampleInputArray2 = [
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
  test("array returned by massageArray to have property-value as expected", function () {
    let o1 = massageArray(exampleCityArray);
    let o2 = massageArray(exampleInputArray2);

    expect(o1[0].cityId).toBe("NYC");
    expect(o1[0].cityName).toBe("New York City");
    expect(o1[0].Category).toBe("Metropolitan");
    expect(o1[0].Area).toBe("Suburbs");

    expect(o2[1].cityId).toBe("LA");
    expect(o2[1].cityName).toBe("Los Angeles");
    expect(o2[1].Category).toBe("Residential");
    expect(o2[1].Area).toBe("Downtown");

    global.score += 2;
  });

  test("array returned by massageArray to be as expected", function () {
    let o1 = massageArray(exampleCityArray);
    expect(o1).toMatchObject(eo1);

    // let o2 = massageArray(exampleInputArray2);
    // expect(o2).toMatchObject(eo2);

    global.score += 2;
  });
});

///*********************************************************Test cases for question2.js */

describe("Problem-4", () => {
  const mockService = {
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
  it("apple Available ,carrot Available,apple Price, and carrot Price", () => {
    expect(findDetails(mockService).appleAvailable).toBe(50);
    expect(findDetails(mockService).carrotAvailable).toBe(25);
    expect(findDetails(mockService).applePrice).toBe(2);
    expect(findDetails(mockService).carrotPrice).toBe(1.5);
    global.score += 1;
  });

  it("should calculate the total revenue correctly", () => {
    const totalRevenue = calculateTotalRevenue(mockService);
    expect(totalRevenue).toContain("Total Revenue: 20.3");
    global.score += 1;
  });
});

///*********************************************************Test cases for question3.js */

describe("Test cases for question3.js", function () {
  const studentExamScores = [
    { name: "Alex", grades: [80, 92, 88, 95] },
    { name: "Eva", grades: [75, 88, 91, 79] },
    { name: "Max", grades: [90, 84, 87, 93] },
    { name: "Sophia", grades: [85, 89, 92, 78] },
    { name: "Oliver", grades: [88, 90, 85, 94] },
    { name: "Ava", grades: [76, 83, 88, 91] },
  ];
  const superheroIceCreamData = [
    {
      name: "Iron Man",
      favoriteIceCreams: [
        "Strawberry",
        "Vanilla",
        "Chocolate",
        "Cookies & Cream",
      ],
    },
    {
      name: "Captain America",
      favoriteIceCreams: [
        "Cookies & Cream",
        "Mint Chocolate Chip",
        "Chocolate",
        "Vanilla",
      ],
    },
    {
      name: "Black Widow",
      favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
    },
    {
      name: "Thor",
      favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
    },
    {
      name: "Hulk",
      favoriteIceCreams: [
        "Vanilla",
        "French Vanilla",
        "Vanilla Bean",
        "Strawberry",
      ],
    },
    {
      name: "Black Panther",
      favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
    },
  ];

  test("To calculate average exam score", () => {
    // const checkthis = IkeaPurchase.toString();
    // expect(checkthis).not.toContain("this");

    expect(calculateAverageExamScore(studentExamScores, "Alex")).toBe(
      `Average Exam Score for Alex: 88.75`
    );
    global.score += 2;
  }); //2

  test("to find the student with the highest average exam score", () => {
    expect(findTopScorer(studentExamScores)).toBe("Top Scorer: Oliver");
    global.score += 2;
  });

  test("to find an array containing the names of students who have passed", () => {
    let ansArr = findPassingStudents(studentExamScores);
    expect(Array.isArray(ansArr)).toBe(true);
    expect(JSON.stringify(ansArr)).toBe(
      JSON.stringify(["Alex", "Max", "Sophia", "Oliver"])
    );
    global.score += 2;
  });

  test("to combine two array", () => {
    const fruits = ["apple", "orange", "banana"];
    const vegetables = ["pineapple", "pears", "mango"];
    let combinedArr = combiningArrays(fruits, vegetables);
    expect(JSON.stringify(combinedArr)).toBe(
      JSON.stringify([
        "apple",
        "orange",
        "banana",
        "pineapple",
        "pears",
        "mango",
      ])
    );
    global.score += 1;
  });

  test("to find the frequency of iceCream in superheroIceCreamData", () => {
    let freq = findFrequency(superheroIceCreamData);
    expect(JSON.stringify(freq)).toBe(
      JSON.stringify({
        Strawberry: 3,
        Vanilla: 4,
        Chocolate: 5,
        "Cookies & Cream": 2,
        "Mint Chocolate Chip": 3,
        "Rocky Road": 1,
        Pistachio: 1,
        Banana: 1,
        "French Vanilla": 1,
        "Vanilla Bean": 1,
      })
    );
    expect(freq["Mint Chocolate Chip"]).toBe(3);
    expect(freq["Chocolate"]).toBe(5);
    global.score += 3;
  });

  test("to merge to object", () => {
    const student = { name: "Nrupul", age: 25 };
    const course = { courseName: "Math", teacher: "Mr. Bhat" };
    let mergedObj = mergingObjects(student, course);
    expect(JSON.stringify(mergedObj)).toBe(
      JSON.stringify({
        name: "Nrupul",
        age: 25,
        courseName: "Math",
        teacher: "Mr. Bhat",
      })
    );
    global.score += 1;
  });


  test("function mergingObjects must return correct studentWithCourse object-1", () => {
    const student = { name: "Bob", age: 22 };
    const course = { courseName: "Science", teacher: "Ms. Johnson" };

    const newStudent = mergingObjects(student, course);

    expect(typeof newStudent).toBe("object");
    expect(newStudent.name).toBe("Bob");
    expect(newStudent.age).toBe(22);
    expect(newStudent.courseName).toBe("Science");
    expect(newStudent.teacher).toBe("Ms. Johnson");

    global.score += 1;
  }); //1
});

describe("Test cases for employee on question3.js page", () => {
  const employees = [
    { name: "Ritesh Ranjan", age: 24, department: "HR", salary: 50000 },
    { name: "Ankush Kumar", age: 28, department: "Finance", salary: 60000 },
    { name: "Dipak Yadav", age: 35, department: "IT", salary: 70000 },
  ];

  test("function employeeInformation Extract name and department of the second employee", () => {
    const ans = employeeInformation(employees);
    expect(ans.secondEmployeeName).toBe("Ankush Kumar");
    expect(ans.secondEmployeeDepartment).toBe("Finance");
    global.score += 1;
  }); //1
  test("function averageSalary return averageSalary of all employees", () => {
    expect(averageSalary(employees)).toBe(60000);

    const employees1 = [{ salary: 100 }, { salary: 100 }];

    expect(averageSalary(employees1)).toBe(100);
    global.score += 1;
  }); //1

  test("function destructuringToSwap return swapped employees array", () => {


    const swappedEmployee = [
      { name: 'Dipak Yadav', age: 35, department: 'IT', salary: 70000 },
      { name: 'Ankush Kumar', age: 28, department: 'Finance', salary: 60000 },
      { name: 'Ritesh Ranjan', age: 24, department: 'HR', salary: 50000 }
    ];

    expect(destructuringToSwap(employees)).toEqual(swappedEmployee);

    global.score += 1;
  }); //1
  test("function highestPaid return employee with the highest salary", () => {
    const employees = [
      {
        name: "Michael Brown",
      },
      { name: "Emma Wilson", age: 32, department: "Sales", salary: 58000 },
      {
        name: "Daniel Anderson",
        age: 29,
        department: "Operations",
        salary: 62000,
      },
      {
        name: "john",
      },

      {
        name: "siya",
        age: 21,
        department: "placements",
        salary: 41000,
      },
    ];

    const highest = {
      age: 29,
      department: "Operations",
      name: "Daniel Anderson",
      salary: 62000,
    };

    expect(highestPaid(employees)).toEqual(highest);

    global.score += 1;
  }); //1
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
