// **Problem 1: Student Exam Scores** [6]
const studentExamScores = [
  { name: "Alex", grades: [80, 92, 88, 95] },
  { name: "Eva", grades: [75, 88, 91, 79] },
  { name: "Max", grades: [90, 84, 87, 93] },
  { name: "Sophia", grades: [85, 89, 92, 78] },
  { name: "Oliver", grades: [88, 90, 85, 94] },
  { name: "Ava", grades: [76, 83, 88, 91] },
];

function calculateAverageExamScore(studentExamScores, name) {
  //returns the average score across all exams for a given student
  var avg = 0;
  for (let i of studentExamScores) {
    let { name: matchName, grades } = i;
    if (matchName === name) {
      var sum = 0;
      for (var j of grades) {
        sum += j;
      }
      avg = sum / grades.length;
    }
  }
  return `Average Exam Score for ${name}: ${avg}`;
}
// console.log(calculateAverageExamScore(studentExamScores,"Alex")); Average Exam Score for Alex: 88.75

function findTopScorer(studentExamScores) {
  //returns the student with the highest average exam score
  var student;
  var maxAvg = 0;
  for (let i of studentExamScores) {
    let { name: Name, grades } = i;
    var avg = 0;
    var sum = 0;
    for (var j of grades) {
      sum += j;
    }
    avg = sum / grades.length;
    if (avg > maxAvg) {
      maxAvg = avg;
      student = Name;
    }
  }
  return `Top Scorer: ${student}`;
}
//console.log(findTopScorer(studentExamScores)); //Top Scorer: Oliver

function findPassingStudents(studentExamScores) {
  //returns an array containing the names of students who have passed
  var student = [];
  var maxAvg = 86;
  for (let i of studentExamScores) {
    let { name: Name, grades } = i;
    var avg = 0;
    var sum = 0;
    for (var j of grades) {
      sum += j;
    }
    avg = sum / grades.length;
    if (avg >= maxAvg) {
      student.push(Name);
    }
  }
  return student;
}
//console.log(findPassingStudents(studentExamScores)) //[ 'Alex', 'Max', 'Sophia', 'Oliver' ]

// **Problem 2: Combining Arrays** [1]
const fruits = ["apple", "orange", "banana"];
const vegetables = ["pineapple", "pears", "mango"];
function combiningArrays(arr1, arr2) {
  //write your code here to combine two array and return it.
  const combine = [...fruits, ...vegetables];
  return combine;
}
//console.log(combiningArrays(fruits, vegetables)); // [ "apple", "orange", "banana","pineapple", "pears", "mango" ]

// **Problem 3: Merging Objects** [1]
// You have two objects **`student`** and **`course`**. Your task is to create a new object **`studentWithCourse`** by merging the properties of both objects using the spread operator.

function mergingObjects(obj1, obj2) {
  // Create the 'studentWithCourse' object by merging 'student' and 'course'

  const studentWithCourse = { ...obj1, ...obj2 };
  return studentWithCourse;
}
const student = { name: "Nrupul", age: 25 };
const course = { courseName: "Math", teacher: "Mr. Bhat" };

//console.log(mergingObjects(student, course)); // { name: 'Nrupul', age: 25, courseName: 'Math', teacher: 'Mr. Bhat' }

// **Problem 4: Find Frequency** [3]

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

function findFrequency(arr) {
  //write your code here...
  let obj = {};
  arr.forEach((favoriteI) => {
    for (let i of favoriteI.favoriteIceCreams) {
      if (obj[i]) {
        obj[i]++;
      } else {
        obj[i] = 1;
      }
    }
  });
  return obj;
}

//console.log(findFrequency(superheroIceCreamData));
//Expected output
// {
//   Strawberry: 3,
//   Vanilla: 4,
//   Chocolate: 5,
//   'Cookies & Cream': 2,
//   'Mint Chocolate Chip': 3,
//   'Rocky Road': 1,
//   Pistachio: 1,
//   Banana: 1,
//   'French Vanilla': 1,
//   'Vanilla Bean': 1
// }

// ### employee data  [5]

// You are given an array of employee objects, each containing information about an employee. Your task is to utilize destructuring to extract and manipulate the data based on specific requirements.

// **Employee Data:**

const employees = [
  { name: "Ritesh Ranjan", age: 24, department: "HR", salary: 50000 },
  { name: "Ankush Kumar", age: 28, department: "Finance", salary: 60000 },
  { name: "Dipak Yadav", age: 35, department: "IT", salary: 70000 },
];

// **Problem 5: Employee Information** [1]

function employeeInformation(employees) {
  // Extract the **`name`** and **`department`** of the second employee in the array and assign them to variables `secondEmployeeName` and `secondEmployeeDepartment`.
  const [, { name: secondEmployeeName, department: secondEmployeeDepartment }] =
    employees;
  return { secondEmployeeName, secondEmployeeDepartment };
}

//console.log(employeeInformation(employees)); // { secondEmployeeName: 'Ankush Kumar',secondEmployeeDepartment: 'Finance' }

//**Problem 6: averageSalary** [1]
function averageSalary(employees) {
  // Create a function **`averageSalary`** that takes an array of employees and calculates the average salary of all employees using destructuring.
  // **Note: use for-of-loop only.**
  var sum = 0;
  for (var { salary } of employees) {
    sum += salary;
  }
  var avg = sum / employees.length;
  return avg;
}

//console.log(averageSalary(employees)); // 60000

//console.log(thirdEmployeeInfo(employees)); //Employee: Dipak Yadav, Age: 35, Salary: 70000, bonus: 7000

// **Problem 7: destructuringToSwap** [1]
function destructuringToSwap(employees) {
  // Use destructuring to swap the values of the first and last employees in the array.
  let [first, ...rest] = employees;
  let last = rest.pop();
  return [last, ...rest, first];
}

// console.log(destructuringToSwap(employees));
// [
//   { name: 'Dipak Yadav', age: 35, department: 'IT', salary: 70000 },
//   { name: 'Ankush Kumar', age: 28, department: 'Finance', salary: 60000 },
//   { name: 'Ritesh Ranjan', age: 24, department: 'HR', salary: 50000 }
// ]

// **Problem 9: highestPaid** [1]
function highestPaid(employees) {
  // **Note: use for-of-loop only.**
  let maxSalary = 0;
  let employee;
  for (let i of employees) {
    let { salary } = i;
    if (maxSalary < salary) {
      maxSalary = salary;
      employee = i;
    }
  }
  return employee;
}

//console.log(highestPaid(employees)); // { name: 'Dipak Yadav', age: 35, department: 'IT', salary: 70000 }

//Dont remove below export statement part
export {
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
};
