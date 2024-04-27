// ## School information on school.js page [5]*********************************
// **School Data:**

const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};

//**Problem 10: countCalculation** [1]*****************

function countCalculation(school) {
  // Extract the `mathTeachersCount` ,`historyTeachersCount` ,`mathStudentsCount` , and  `historyStudentsCount` using multilevel destructuring.
  var {
    departments: {
      math: { teachers: mathTeachersCount, students: mathStudentsCount },
      history: {
        teachers: historyTeachersCount,
        students: historyStudentsCount,
      },
      ...rest
    },
    ...rest2
  } = school;
  return {
    mathTeachersCount: mathTeachersCount,
    historyTeachersCount: historyTeachersCount,
    mathStudentsCount: mathStudentsCount,
    historyStudentsCount: historyStudentsCount,
  };
}
console.log(countCalculation(school));
//Output : {
//   mathTeachersCount: 5,
//   historyTeachersCount: 3,
//   mathStudentsCount: 150,
//   historyStudentsCount: 100
// }

//**Problem 11: findTopStudent** [1]******************

function findTopStudent(school, subject) {
  // Write a function **`findTopStudent`** that takes a course name as a parameter and finds the student with the highest score in that course using multilevel destructuring.
  let { students } = school;
  let student = {};
  let maxMark = 0;
  for (let i of students) {
    let {
      scores: { [subject]: mark },
    } = i;
    if (maxMark < mark) {
      maxMark = mark;
      student = i;
    }
  }
  return student;
}
console.log(findTopStudent(school, "math"));
// {
//   name: 'Alice',
//   className: 'Grade 5',
//   scores: { math: 95, science: 88, history: 85, english: 92 }
// }

//**Problem 12: addNewDept** [1]************************
const newDepartment = {
  art: { teachers: 2, students: 50 },
};

function addNewDept(school, newDepartment) {
  // Use the spread operator to add new department **`art`** with teachers and students to the school's departments.
  var { departments, ...rest } = school;
  var updatedDepartment = { ...departments, ...newDepartment };
  return { ...rest, departments: updatedDepartment };
}

console.log(addNewDept(school, newDepartment));
//  {
//   name: 'XYZ School',
//   establishYear: 1990,
//   departments: {
//     math: { teachers: 5, students: 150 },
//     science: { teachers: 4, students: 120 },
//     history: { teachers: 3, students: 100 },
//     english: { teachers: 4, students: 130 },
//     art: { teachers: 2, students: 50 }
//   },
//   courses: [ 'math', 'science', 'history', 'english' ],
//   students: [
//     { name: 'Alice', className: 'Grade 5', scores: [Object] },
//     { name: 'Bob', className: 'Grade 4', scores: [Object] },
//     { name: 'Charlie', className: 'Grade 5', scores: [Object] },
//     { name: 'Diana', className: 'Grade 4', scores: [Object] }
//   ]
// }

//**Problem 13: highestStudentCountDepartment**[1]************

function highestStudentCountDepartment(school) {
  //Write a function **`highestStudentCountDepartment`** that returns the department (name) with the highest number of students.
  let max = 0;
  let department = null;
  for (var key in school.departments) {
    if (school.departments[key].students > max) {
      max = school.departments[key].students;
      department = key;
    }
  }
  return department;
}

console.log(highestStudentCountDepartment(school)); //math

// **Problem 14: Greeting Message** [1]**********************

function generateGreeting(name, place) {
  if (!place) {
    return `Hello, ${name}!`;
  } else if (place === "Spanish") {
    return `Hola, ${name}!`;
  } else if (place === "French") {
    return `Bonjour, ${name}!`;
  }
}
// **Example:**
console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"

//Dont remove below export statement part

export {
  countCalculation,
  findTopStudent,
  addNewDept,
  highestStudentCountDepartment,
  generateGreeting,
};
