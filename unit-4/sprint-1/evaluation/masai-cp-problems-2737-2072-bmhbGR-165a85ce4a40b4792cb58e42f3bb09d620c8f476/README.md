# JS- Destructuring Array,Object,HOF Inbuilt Method

# Objective

- to test the knowledge of basic JS concepts.
- to test the knowledge on ES6 features (rest/spread/destructuring/default param in function)
- to test the knowledge on array HOF

## Submission Instructions [Please note]

- The Submission should not contain spaces, for example /JS-204 folder/eval will not work.
- Do not push node_modules and package_lock.json to github.

## Maximum Marks - 27

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Installation

```
npm install --engine-strict
```

## Test

```
npm test
```

## Test (Watch mode)

```
npm test -- --watchAll
```

## file structure

most of your work would happen in the `src` directory.

```
src
├── question1.js
├── question2.js
├── question3.js

```

```
✅ Submit the problem [1 mark]

### Test cases for question1.js
----------------------------------------------
### Test cases for Problem 1
✅ Checking totalSpending of customer in array [2 marks]

### Test cases for Problem 2
✅ checking removeKeyValuePair in object[2 marks]

### Test cases for Problem 3
✅ array returned by massageArray to have property-value as expected [2 mark]
✅ array returned by massageArray to be as expected [2 mark]

### Test cases for question2.js
----------------------------------------------

### Test cases for Problem 1
✅ apple Available, carrot Available, apple Price, and carrot Price [1 mark]
✅ should calculate the total revenue correctly [1 mark]

### Test cases for question3.js
----------------------------------------------
✅ function calculateAverageExamScore must return correct average Exam Score [2 marks]
✅ function findTopScorer must return the correct highest average exam score [2 marks]
✅ function findPassingStudents must return an array containing the names of students who have passed [2 marks]
✅ function combiningArrays must return correct groceries array [2 marks]
✅ function mergingObjects must return correct studentWithCourse object-1 [1 mark]
✅ function findFrequency must return correct object with the frequency of iceCream in superheroIceCreamData [3 mark]
### Test cases for employee data on question3.js
✅ function employeeInformation Extract name and department of the second employee [1 mark]
✅ function averageSalary return averageSalary of all employees [1 mark]
✅ function destructuringToSwap return swapped employees array [1 mark]
✅ function highestPaid return employee with the highest salary [1 mark]


```

<span style="color: green"> Read the test results carefully, they may provide you with some extra information.</span>

_<span style=" color: red">Note: all the return statements/ messages while creating methods are case sensitive. Please try to follow as it is you can check using a running test case otherwise, you will lose marks for a particular part</span>._

# question1.js

<h2 style="color:#215dc8">
 Problem statement.1
</h2> 
You have one array of objects having customer purchase information, you have to modify that array of objects and have to add a new key called <span style="color:orange">totalSpending</span> to each object that will contain the sum of all the product purchased by each customer. Pass an array as an argument in the function <span style="color:orange">findTotalSpending</span> and return a modified array with the totalSpending(sum of all the purchased product of a single customer), from the function. You can refer below as an example.

- The data type for the "price" of the product is either a `number` or a `string`.

- **input**

```javascript
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
console.log(findTotalSpending(customerArray));
```

- **Output**

```javascript
[
  {
    name: "Customer1",
    purchases: [
      { product: "Laptop", price: 1200 },
      { product: "Headphones", price: "80" },
      { product: "Mouse", price: "25" },
    ],
    totalSpending: 1305,
  },
  {
    name: "Customer2",
    purchases: [
      { product: "Smartphone", price: "600" },
      { product: "Charger", price: 15 },
      { product: "Tablet", price: "250" },
    ],
    totalSpending: 865,
  },
];
```

<h2 style="color:#215dc8">
 Problem statement.2
</h2>

For an object with employee details, you have to create a function removeKeyValuePair that takes input as

- employee object
- key to remove (string)

the function _removeKeyValuePair_ will `return` the object without the key-value pair you have given for example we are passing `city` should get the object of a employee without `city` as follows

- You can use any method to implement but the recommended one is using the _spread operator_.[link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

**Input**

```javascript
const employee = {
  name: "Alex",
  password: "securePass123",
  id: "3hj47p",
  city: "San Francisco",
};
```

**Output**

```
// console.log(removeKeyValuePair(employee, "city"));//{name: "Alex",password: "securePass123",id: "3hj47p"};
```

<h2 style="color:#215dc8">
 Problem statement.3
</h2> 
The function `massageArray()` is expected to return an array of objects.

Parameter of `massageArray()`: `inputArray` of type array

### Provided `CityAreas`:

```javascript
let CityAreas = [
  { id: 1, name: "Downtown" },
  { id: 2, name: "Suburbs" },
];
```

### Provided `CityCategories`

```javascript
let CityCategories = {
  1: "Metropolitan",
  2: "Residential",
};
```

### Example Input Array:

```javascript
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
```

- If `feature` and `detail1` is null or "" avoid them in the output array.

### Expected output with the above input:

```javascript
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
```

### Mapping of properties from input to expected output

- cityId maps to cityId
- cityName maps to cityName
- Category maps to Category, but the id turns into the name
- Area maps to Area, but the id turns into the name
- Finally, 20 feature & 20 detail turns into a single entry of Features which is an array of object. Each object of Features contains a key called Feature and another key called Detail.

# question2.js

<h2 style="color:#215dc8">
 Problem statement.1
</h2>

- object `foodDeliveryService` is already provided in the template use this for problem as follows

```javascript
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
```

### Level-Problem 1-1

- Extract the `appleAvailable`, `carrotAvailable`, `applePrice`, and `carrotPrice` using multilevel destructuring

- Create function `findDetails` which takes `groceryStore` as input and _return_ object as

```
    {
    appleAvailable: no of apple available,
    carrotAvailable: no of carrot available,
    applePrice: the price of apple,
    carrotPrice: the price of  carrot,
  }
```

- Hint: use destructuring

```javascript
//Example Invocation
console.log(findDetails(groceryStore).appleAvailable); // 50
console.log(findDetails(groceryStore).carrotAvailable); // 25
console.log(findDetails(groceryStore).applePrice); // 2
console.log(findDetails(groceryStore).carrotPrice); // 1.5
```

### Level-Problem 1-2

- Write a function `calculateTotalRevenue` that calculates and returns the total revenue from all completed orders across all sections.

- Create function `calculateTotalRevenue` which take `groceryStore` as input and _return_ a String as
  `Total Revenue: {totalRevenue}`

```
//Example Invocation
 console.log(calculateTotalRevenue(groceryStore)); 20.3 = (3 + 4 + 5 + 3.5 + 2.8 + 2)
```

# question3.js

<h3 style="color:#215dc8">
Problem 1: Student Exam Scores [3]
</h3>
You have been given a dataset representing student exam scores. Each student's information is represented as an object with the following properties:

```javascript
const studentExamScores = [
  { name: "Alex", grades: [80, 92, 88, 95] },
  { name: "Eva", grades: [75, 88, 91, 79] },
  { name: "Max", grades: [90, 84, 87, 93] },
  { name: "Sophia", grades: [85, 89, 92, 78] },
  { name: "Oliver", grades: [88, 90, 85, 94] },
  { name: "Ava", grades: [76, 83, 88, 91] },
];
```

- Write a function `calculateAverageExamScore` that takes `studentExamScores` array and `name` as parameter and returns the average score across all exams for a given student like `Average Exam Score for {name}: {averagePrice}`.

- Write a function `findTopScorer` that takes `studentExamScores` array and finds and returns the student with the highest average exam score like `Top Scorer: {<name>}`.

- Write a function `findPassingStudents` that takes `studentExamScores` array and returns an array containing the names of students who have passed. A student is considered to have passed if their average exam score is 86 or higher.

- Example Invocations:

```javascript
console.log(calculateAverageExamScore(studentExamScores, "Alex")); // Average Exam Score for Alex: 88.75

console.log(findTopScorer(studentExamScores)); // Top Scorer: Oliver

console.log(findPassingStudents(studentExamScores));
// [ 'Alex', 'Max', 'Sophia', 'Oliver' ]
```

<h3 style="color:#215dc8">
Problem 2: Cloning Objects [1+1]
</h3>

define a `cloningObjects` function that takes input as - person object with properties 1. name 2. age 3. address

- Create the 'personCopy' object by cloning the 'person' object

- Your task is to create a new object **`personCopy`** by cloning the **`person`** object using the spread operator is compulsory

- `cloningObjects` return `personCopy` object

```javascript
const person = { name: "John", age: 30, address: "123 Main St" };

console.log(cloningObjects(person)); //{ name: "John", age: 30, address: "123 Main St" }
```

<h3 style="color:#215dc8">
Problem 3: Merging Objects [1]
</h3>

define a `mergingObjects` function that takes input as - student object - course

- Create the 'studentWithCourse' object by merging 'student' and 'course'

- You have two objects **`student`** and **`course`**. Your task is to create a new object **`studentWithCourse`** by merging the properties of both objects using the spread operator is compulsory

- `mergingObjects` return `studentWithCourse` object

```javascript
const student = { name: "Nrupul", age: 25 };
const course = { courseName: "Math", teacher: "Mr. Bhat" };

console.log(mergingObjects(student, course)); // { name: 'Nrupul', age: 25, courseName: 'Math', teacher: 'Mr. Bhat' }
```

<h3 style="color:#215dc8">
Problem 4: Find Frequency [3]
</h3>

define a `findFrequency` function that takes input as an array of objects and return an object of iceCream and their frequency.

```javascript
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

console.log(findFrequency(superheroIceCreamData));
//Expected output
{
  Strawberry: 3,
  Vanilla: 4,
  Chocolate: 5,
  'Cookies & Cream': 2,
  'Mint Chocolate Chip': 3,
  'Rocky Road': 1,
  Pistachio: 1,
  Banana: 1,
  'French Vanilla': 1,
  'Vanilla Bean': 1
}
```

<h2 style="color:#215dc8">
employee data on question3.js  [4]
</h2>

<h3 style="color:#215dc8">
Problem 5: Employee Information [1]
</h3>

- You are given an array of employee objects, each containing information about an employee.

- Your task is to utilize destructuring to extract and manipulate the data based on specific requirements.

- define an `employeeInformation` function that takes input as

  - employees

- Extract the **`name`** and **`department`** of the second employee in the array and assign them to variables `secondEmployeeName` and `secondEmployeeDepartment`.

- `employeeInformation` return object with secondEmployeeName and secondEmployeeDepartment

```javascript
const employees = [
  { name: "Ritesh Ranjan", age: 24, department: "HR", salary: 50000 },
  { name: "Ankush Kumar", age: 28, department: "Finance", salary: 60000 },
  { name: "Dipak Yadav", age: 35, department: "IT", salary: 70000 },
];

console.log(employeeInformation(employees)); // { secondEmployeeName: 'Ankush Kumar',secondEmployeeDepartment: 'Finance' }
```

<h3 style="color:#215dc8">
Problem 6: averageSalary [1]
</h3>
- Create a function **`averageSalary`** that takes an array of employees and calculates the average salary of all employees using destructuring.

- **Note: use for-of-loop only.**

- define an `averageSalary` function that takes input as

  - employees

- `averageSalary` return average salary

```javascript
const employees = [
  { name: "Ritesh Ranjan", age: 24, department: "HR", salary: 50000 },
  { name: "Ankush Kumar", age: 28, department: "Finance", salary: 60000 },
  { name: "Dipak Yadav", age: 35, department: "IT", salary: 70000 },
];

console.log(averageSalary(employees)); // 60000
```

<h3 style="color:#215dc8">
Problem 8: destructuringToSwap [1]
</h3>

- Use destructuring to swap the values of the first and last employees in the array.

- define a `destructuringToSwap` function that takes input as

  - employees

- `destructuringToSwap` return an object `employees`

```javascript
const employees = [
  { name: "Ritesh Ranjan", age: 24, department: "HR", salary: 50000 },
  { name: "Ankush Kumar", age: 28, department: "Finance", salary: 60000 },
  { name: "Dipak Yadav", age: 35, department: "IT", salary: 70000 },
];

console.log(destructuringToSwap(employees))[
const employees = [
   { name: "Dipak Yadav", age: 35, department: "IT", salary: 70000 },
   { name: "Ankush Kumar", age: 28, department: "Finance", salary: 60000 },
   { name: "Ritesh Ranjan", age: 24, department: "HR", salary: 50000 },
];
```

<h3 style="color:#215dc8">
Problem 9: highestPaid [1]
</h3>

- Write a function **`highestPaid`** that takes an array of employees and returns the employee with the highest salary using destructuring.

- **Note: use for-of-loop only.**

- define a `highestPaid` function that takes input as

  - employees

- `highestPaid` return an object employee object with a high salary

```javascript
const employees = [
  { name: "Ritesh Ranjan", age: 24, department: "HR", salary: 50000 },
  { name: "Ankush Kumar", age: 28, department: "Finance", salary: 60000 },
  { name: "Dipak Yadav", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)); // // { name: 'Dipak Yadav', age: 35, department: 'IT', salary: 70000 }
```

#### The Problem is tested on CP

<img src="https://i.imgur.com/LMWOGNc.png" height="500px" />

### General guidelines

- Example inputs are just for example. The tests may check the functions by invoking them with different inputs of the same shape.
- Before writing a single line of code please read the problem statement very carefully.
- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
