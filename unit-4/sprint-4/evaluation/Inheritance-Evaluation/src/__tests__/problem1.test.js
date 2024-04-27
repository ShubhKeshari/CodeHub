const {
  Person,
  Employee,
  Manager,
  Accountant,
  SeniorManager,
  // Developer,
  // SeniorDeveloper,
} = require("../problem1");
const {
  Person: Person2,
  Employee: Employee2,
  Manager: Manager2,
  Accountant: Accountant2,
  SeniorManager: SeniorManager2,
  // Developer,
  // SeniorDeveloper,
} = require("../problem2");
const {
  Person: Person3,
  Employee: Employee3,
  Manager: Manager3,
  Accountant: Accountant3,
  // Developer,
  SeniorManager: SeniorManager3,
  // SeniorDeveloper,
} = require("../problem3");

const { Product } = require("../problem4");

global.score = 1;

//test cases for person
describe("Person object", () => {
  test("should create a new Person class with the correct name and age", () => {
    const person = new Person("john", 23);
    expect(person.name).toBe("john");
    expect(person.age).toBe(23);

    const person1 = new Person("sham", 3);
    expect(person1.name).toBe("sham");
    expect(person1.age).toBe(3);

    expect(person.hasOwnProperty("getDetails")).toBe(false);
    expect(person.hasOwnProperty("increaseAge")).toBe(false);
    expect(person.hasOwnProperty("decreaseAge")).toBe(false);

    global.score += 1;
  });

  test("should getDetails of Person class with the correct message", () => {
    const person = new Person("john", 23);
    const expectedMessage = "john is 23 years old.";
    expect(person.getDetails()).toBe(expectedMessage);
    expect(person.getDetails()).toContain("john");
    expect(person.getDetails()).toContain("23");
    global.score += 0.5;
  });
  test("should able to increase and decreased the person age", () => {
    const person = new Person("Debu", 23);
    const expectedAge = 24;

    expect(person.getDetails()).toContain("Debu is 23 years old.");
    person.increaseAge();
    expect(person.age).toBe(expectedAge);
    expect(person.getDetails()).toContain("Debu is 24 years old.");

    const person2 = new Person("Charlie", 25);
    const decreasedAge = person2.decreaseAge();

    expect(decreasedAge).toBe(24);
    expect(person2.age).toBe(24);
    const person3 = new Person("David", 0);

    expect(() => {
      person3.decreaseAge();
    }).toThrow("Age can't be decreased beyond zero.");

    global.score += 0.5;
  });
});

// Test cases for the Doctor object
describe("Employee object", () => {
  test("should create a new Employee class with the correct name, age and salary properties", () => {
    const employee = new Employee("John", 54, 54878231);
    expect(employee.name).toBe("John");
    expect(employee.age).toBe(54);
    expect(employee.salary).toBe(54878231);

    const employee1 = new Employee("rahul", 4, 548231);
    expect(employee1.name).toBe("rahul");
    expect(employee1.age).toBe(4);
    expect(employee1.salary).toBe(548231);

    expect(employee.hasOwnProperty("getDetails")).toBe(false);
    expect(employee.hasOwnProperty("increaseSalary")).toBe(false);
    expect(employee.hasOwnProperty("decreaseSalary")).toBe(false);

    expect(Employee.prototype.__proto__ === Person.prototype).toBe(true);

    global.score += 1;
  });

  test("should getDetails of Employee class with the correct message", () => {
    const employee = new Employee("Debu", 23, 54540);
    const expectedMessage =
      "Hi, I am Debu and I am 23 years old and my salary is 54540.";
    expect(employee.getDetails()).toBe(expectedMessage);
    expect(employee.getDetails()).toContain("Debu");
    expect(employee.getDetails()).toContain("23");
    expect(employee.getDetails()).toContain("54540");
    global.score += 0.5;
  });

  test("should be able to increase the employee salary", () => {
    const employee = new Employee("John", 23, 50000);
    const increaseAmount = 5000;
    const expectedSalary = 55000;

    expect(employee.increaseSalary(increaseAmount)).toBe(expectedSalary);
    const employee2 = new Employee("John", 50000);
    const increaseAmount2 = -5000;

    expect(() => {
      employee2.increaseSalary(increaseAmount2);
    }).toThrow("value has to be positive integer and greater than zero.");

    global.score += 0.5;
  });

  test("should throw an error when trying to decrease salary with negative value", () => {
    const employee = new Employee("John", 50000);
    const decreaseAmount = -5000;

    expect(() => {
      employee.decreaseSalary(decreaseAmount);
    }).toThrow("value has to be positive integer and greater than zero.");

    const employee2 = new Employee("John", 23, 50000);
    const decreaseAmount2 = 5000;
    const expectedSalary = 45000;

    expect(employee2.decreaseSalary(decreaseAmount2)).toBe(expectedSalary);

    const employee3 = new Employee("John", 23, 50000);
    const decreaseAmount3 = 600000;

    expect(() => {
      employee3.decreaseSalary(decreaseAmount3);
    }).toThrow("The value has to be less than or equal to the current salary.");

    global.score += 0.5;
  });
});

// Test cases for the Nurse object
describe("Manager object", () => {
  test("should create a new Manager class with the correct name, age, salary, and team properties", () => {
    const manager = new Manager("Adarsh", 23, 54321, "instructor");
    expect(manager.name).toBe("Adarsh");
    expect(manager.age).toBe(23);
    expect(manager.salary).toBe(54321);
    expect(manager.team).toBe("instructor");

    const manager1 = new Manager("debu", 23, 2000, "developer");
    expect(manager1.name).toBe("debu");
    expect(manager1.age).toBe(23);
    expect(manager1.salary).toBe(2000);
    expect(manager1.team).toBe("developer");

    expect(manager1.hasOwnProperty("getDetails")).toBe(false);
    expect(manager1.hasOwnProperty("manageTeam")).toBe(false);

    expect(Manager.prototype.__proto__ === Employee.prototype).toBe(true);

    global.score += 1;
  });

  test("should getDetails of Manager class with the correct message", () => {
    const manager = new Manager("swati", 41, 4567, "sales");
    const expectedMessage =
      "Hi, I am swati and I am 41 years old and my salary is 4567 and I am a manager.";
    expect(manager.getDetails()).toBe(expectedMessage);
    expect(manager.getDetails()).toContain("swati");
    expect(manager.getDetails()).toContain("41");
    expect(manager.getDetails()).toContain("4567");

    global.score += 0.5;
  });
  test("should manageTeam of Manager class with the correct message", () => {
    const manager = new Manager("swati", 41, 4567, "sales");
    const expectedMessage = `I am swati and I manage sales team.`;
    expect(manager.manageTeam()).toBe(expectedMessage);
    expect(manager.manageTeam()).toContain("swati");
    expect(manager.manageTeam()).toContain("sales");

    global.score += 1;
  });
});

// Accountant
describe("Accountant object", () => {
  test("should create a new Accountant class with the correct name, age, salary, and clients properties", () => {
    const accountant = new Accountant("Debobrota", 65, 150000, [
      "Client I",
      "Client J",
    ]);
    expect(accountant.name).toBe("Debobrota");
    expect(accountant.age).toBe(65);
    expect(accountant.salary).toBe(150000);
    expect(accountant.clients).toEqual(["Client I", "Client J"]);

    const accountant2 = new Accountant("Debu", 25, 120000, ["HEY", "HELLO"]);
    expect(accountant2.name).toBe("Debu");
    expect(accountant2.age).toBe(25);
    expect(accountant2.salary).toBe(120000);
    expect(accountant2.clients).toEqual(["HEY", "HELLO"]);

    expect(accountant2.hasOwnProperty("getDetails")).toBe(false);
    expect(accountant2.hasOwnProperty("removeClient")).toBe(false);
    expect(accountant2.hasOwnProperty("addClient")).toBe(false);
    expect(accountant2.hasOwnProperty("manageAccounts")).toBe(false);

    expect(Accountant.prototype.__proto__ === Employee.prototype).toBe(true);

    global.score += 1;
  });

  test("getDetails should return correct string", () => {
    const accountant = new Accountant("Alice", 30, 60000, []);
    const expectedDetails =
      "Hi I am Alice and I am 30 years old and my salary is 60000 and I am an accountant.";

    expect(accountant.getDetails()).toBe(expectedDetails);

    global.score += 0.5;
  });

  test("manageAccounts should return correct string", () => {
    const accountant = new Accountant("Bob", 35, 70000, [
      "Client A",
      "Client B",
    ]);
    const expectedString =
      "Bob is managing accounts for clients: Client A,Client B.";

    expect(accountant.manageAccounts()).toBe(expectedString);
    global.score += 0.5;
  });

  test("addClient should add client successfully and return correct string", () => {
    const accountant = new Accountant("Charlie", 25, 50000, []);
    const clientToAdd = "Client C";
    const expectedString = "Client C added successfully.";

    expect(accountant.addClient(clientToAdd)).toBe(expectedString);
    expect(accountant.clients).toContain(clientToAdd);
    global.score += 1;
  });

  test("removeClient should remove client successfully and return correct string", () => {
    const clients = ["Client A", "Client B", "Client C"];
    const accountant = new Accountant("David", 28, 55000, clients);
    const clientToRemove = "Client B";
    const expectedString = "Client B removed successfully.";

    expect(accountant.removeClient(clientToRemove)).toBe(expectedString);
    expect(accountant.clients).not.toContain(clientToRemove);
    global.score += 1;
  });

  test("addClient should throw an error for invalid input", () => {
    const accountant = new Accountant("Eve", 40, 65000, []);
    const invalidClient = "";

    expect(() => {
      accountant.addClient(invalidClient);
    }).toThrow("skill has to be non-empty string.");
    global.score += 1;
  });

  test("removeClient should throw an error for invalid input", () => {
    const clients = ["Client A", "Client B", "Client C"];
    const accountant = new Accountant("Frank", 45, 75000, clients);
    const invalidClient = 123;

    expect(() => {
      accountant.removeClient(invalidClient);
    }).toThrow("client has to be non-empty string.");
    global.score += 1;
  });
});

describe("SeniorManager object", () => {
  test("should create a new SeniorManager class with the correct name, age, salary, team, and yearsInPosition properties", () => {
    const seniorManager = new SeniorManager(
      "Alice",
      40,
      100000,
      "Engineering",
      5
    );
    expect(seniorManager.name).toBe("Alice");
    expect(seniorManager.age).toBe(40);
    expect(seniorManager.salary).toBe(100000);
    expect(seniorManager.team).toBe("Engineering");
    expect(seniorManager.yearsInPosition).toBe(5);

    const seniorManager1 = new SeniorManager("Bob", 45, 120000, "Finance", 8);
    expect(seniorManager1.name).toBe("Bob");
    expect(seniorManager1.age).toBe(45);
    expect(seniorManager1.salary).toBe(120000);
    expect(seniorManager1.team).toBe("Finance");
    expect(seniorManager1.yearsInPosition).toBe(8);

    expect(seniorManager1.hasOwnProperty("getDetails")).toBe(false);
    expect(seniorManager1.hasOwnProperty("displayYearsInPosition")).toBe(false);

    expect(SeniorManager.prototype.__proto__ === Manager.prototype).toBe(true);

    global.score += 1;
  });

  test("getDetails should return correct string", () => {
    const seniorManager = new SeniorManager(
      "Alice",
      40,
      100000,
      "Engineering",
      5
    );
    const expectedDetails =
      "Hi I am Alice and I am 40 years old and my salary is 100000 and I am a senior manager.";

    expect(seniorManager.getDetails()).toBe(expectedDetails);
    global.score += 0.5;
  });

  test("displayYearsInPosition should return correct string", () => {
    const seniorManager = new SeniorManager("Bob", 45, 120000, "Finance", 8);
    const expectedString =
      "Bob has been in the position of senior manager for 8 years.";

    expect(seniorManager.displayYearsInPosition()).toBe(expectedString);
    global.score += 0.5;
  });
});

// describe("Developer object", () => {
//   test("should create a new Developer class with the correct name, age, salary, and techStack properties", () => {
//     const developer = new Developer("Alice", 30, 60000, [
//       "JavaScript",
//       "React",
//     ]);
//     expect(developer.name).toBe("Alice");
//     expect(developer.age).toBe(30);
//     expect(developer.salary).toBe(60000);
//     expect(developer.techStack).toEqual(["JavaScript", "React"]);

//     const developer1 = new Developer("Bob", 35, 70000, ["HTML", "CSS"]);
//     expect(developer1.name).toBe("Bob");
//     expect(developer1.age).toBe(35);
//     expect(developer1.salary).toBe(70000);
//     expect(developer1.techStack).toEqual(["HTML", "CSS"]);

//     global.score += 1;
//   });

//   test("getDetails should return correct string", () => {
//     const developer = new Developer("Alice", 30, 60000, [
//       "JavaScript",
//       "React",
//     ]);
//     const expectedDetails =
//       "Hi I am Alice and I am 30 years old and my salary is 60000 and I am a developer.";
//     expect(developer.getDetails()).toBe(expectedDetails);

//     global.score += 1;
//   });

//   test("addSkill should add skill successfully and return correct string", () => {
//     const developer = new Developer("Bob", 35, 70000, ["HTML", "CSS"]);
//     const skillToAdd = "Node.js";
//     const expectedString = "Node.js added successfully.";

//     expect(developer.addSkill(skillToAdd)).toBe(expectedString);
//     expect(developer.techStack).toContain(skillToAdd);

//     global.score += 1;
//   });

//   test("removeSkill should remove skill successfully and return correct string", () => {
//     const techStack = ["JavaScript", "React", "Node.js"];
//     const developer = new Developer("Charlie", 25, 50000, techStack);
//     const skillToRemove = "React";
//     const expectedString = "React removed successfully.";

//     expect(developer.removeSkill(skillToRemove)).toBe(expectedString);
//     expect(developer.techStack).not.toContain(skillToRemove);

//     global.score += 1;
//   });

//   test("addSkill should throw an error for invalid input", () => {
//     const developer = new Developer("David", 28, 55000, []);
//     const invalidSkill = "";

//     expect(() => {
//       developer.addSkill(invalidSkill);
//     }).toThrow("skill has to be non-empty string.");

//     global.score += 1;
//   });

//   test("removeSkill should throw an error for invalid input", () => {
//     const techStack = ["JavaScript", "React", "Node.js"];
//     const developer = new Developer("Eve", 40, 65000, techStack);
//     const invalidSkill = 123;

//     expect(() => {
//       developer.removeSkill(invalidSkill);
//     }).toThrow("skill has to be non-empty string.");

//     global.score += 1;
//   });
// });

// describe("SeniorDeveloper object", () => {
//   test("should create a new SeniorDeveloper class with the correct name, age, salary, techStack, and projectsCompleted properties", () => {
//     const seniorDeveloper = new SeniorDeveloper(
//       "Alice",
//       35,
//       90000,
//       ["JavaScript", "React"],
//       10
//     );
//     expect(seniorDeveloper.name).toBe("Alice");
//     expect(seniorDeveloper.age).toBe(35);
//     expect(seniorDeveloper.salary).toBe(90000);
//     expect(seniorDeveloper.techStack).toEqual(["JavaScript", "React"]);
//     expect(seniorDeveloper.projectsCompleted).toBe(10);

//     const seniorDeveloper1 = new SeniorDeveloper(
//       "Alice",
//       35,
//       90000,
//       ["JavaScript", "React"],
//       10
//     );
//     expect(seniorDeveloper1.name).toBe("Alice");
//     expect(seniorDeveloper1.age).toBe(35);
//     expect(seniorDeveloper1.salary).toBe(90000);
//     expect(seniorDeveloper1.techStack).toEqual(["JavaScript", "React"]);
//     expect(seniorDeveloper1.projectsCompleted).toBe(10);

//     global.score += 1;
//   });

//   test("getDetails should return correct string", () => {
//     const seniorDeveloper = new SeniorDeveloper(
//       "Alice",
//       35,
//       90000,
//       ["JavaScript", "React"],
//       10
//     );
//     const expectedDetails =
//       "Hi I am Alice and I am 35 years old and I have worked in 10 projects.";

//     expect(seniorDeveloper.getDetails()).toBe(expectedDetails);
//     global.score += 1;
//   });

//   test("mentorJuniorDevelopers should return correct string", () => {
//     const seniorDeveloper = new SeniorDeveloper(
//       "Bob",
//       40,
//       100000,
//       ["Java", "Spring"],
//       15
//     );
//     const expectedString = "Bob is mentoring junior developers in the team.";

//     expect(seniorDeveloper.mentorJuniorDevelopers()).toBe(expectedString);
//     global.score += 1;
//   });

//   test("updateProject should update projectsCompleted property correctly", () => {
//     const seniorDeveloper = new SeniorDeveloper(
//       "Charlie",
//       38,
//       95000,
//       ["Python", "Django"],
//       20
//     );
//     const newProjectsCompleted = 25;

//     seniorDeveloper.updateProject(newProjectsCompleted);
//     expect(seniorDeveloper.projectsCompleted).toBe(newProjectsCompleted);
//     global.score += 1;
//   });

//   test("updateProject should throw an error for invalid input", () => {
//     const seniorDeveloper = new SeniorDeveloper(
//       "David",
//       45,
//       110000,
//       ["C#", "ASP.NET"],
//       30
//     );
//     const invalidValue = -5;

//     expect(() => {
//       seniorDeveloper.updateProject(invalidValue);
//     }).toThrow("Value has to be positive integer.");
//     global.score += 1;
//   });
// });

// Problem 2
describe("Person prototype", () => {
  test("should create a new Person2 class with the correct name and age properties", () => {
    const person = new Person2("Alice", 30);
    expect(person.name).toBe("Alice");
    expect(person.age).toBe(30);

    const person1 = new Person2("Bob", 35);
    expect(person1.name).toBe("Bob");
    expect(person1.age).toBe(35);

    expect(person1.hasOwnProperty("getDetails")).toBe(false);
    expect(person1.hasOwnProperty("increaseAge")).toBe(false);
    expect(person1.hasOwnProperty("decreaseAge")).toBe(false);

    global.score += 1;
  });

  test("getDetails should return correct string", () => {
    const person = new Person2("Alice", 30);
    const expectedDetails = "Alice is 30 years old.";

    expect(person.getDetails()).toBe(expectedDetails);
    global.score += 0.5;
  });

  test("increaseAge and decreaseAge should working correctly and decreaseAge should throw an error when age is already zero", () => {
    const person = new Person2("Bob", 35);
    const increasedAge = person.increaseAge();

    expect(increasedAge).toBe(36);
    expect(person.age).toBe(36);

    const person2 = new Person2("Charlie", 25);
    const decreasedAge = person2.decreaseAge();

    expect(decreasedAge).toBe(24);
    expect(person2.age).toBe(24);
    const person3 = new Person2("David", 0);

    expect(() => {
      person3.decreaseAge();
    }).toThrow("Age can't be decreased beyond zero.");

    expect(person3.age).toBe(0);

    global.score += 1;
  });
});

describe("Employee prototype", () => {
  test("should create a new Employee class with the correct name, age, and salary properties", () => {
    const employee = new Employee2("Alice", 30, 60000);
    expect(employee.name).toBe("Alice");
    expect(employee.age).toBe(30);
    expect(employee.salary).toBe(60000);

    const employee2 = new Employee2("Bob", 35, 70000);
    expect(employee2.name).toBe("Bob");
    expect(employee2.age).toBe(35);
    expect(employee2.salary).toBe(70000);

    expect(employee2.hasOwnProperty("getDetails")).toBe(false);
    expect(employee2.hasOwnProperty("decreaseSalary")).toBe(false);
    expect(employee2.hasOwnProperty("increaseSalary")).toBe(false);

    expect(Employee2.prototype.__proto__ === Person2.prototype).toBe(true);

    global.score += 1;
  });

  test("getDetails should return correct string", () => {
    const employee = new Employee2("Alice", 30, 60000);
    const expectedDetails =
      "Hi I am Alice and I am 30 years old and my salary is 60000.";

    expect(employee.getDetails()).toBe(expectedDetails);
    global.score += 0.5;
  });

  test("increaseSalary should working correctly and should throw an error for invalid input", () => {
    const employee = new Employee2("Bob", 35, 70000);
    const increaseAmount = 5000;
    const expectedSalary = 75000;

    expect(employee.increaseSalary(increaseAmount)).toBe(expectedSalary);
    expect(employee.salary).toBe(expectedSalary);

    const employee2 = new Employee2("Charlie", 25, 50000);
    const invalidValue = "invalid";

    expect(() => {
      employee2.increaseSalary(invalidValue);
    }).toThrow("value has to be positive integer and greater than zero.");

    expect(employee2.salary).toBe(50000);

    global.score += 1;
  });

  test("decreaseSalary should working correctly and should throw an error when value is greater than the current salary or invalid input", () => {
    const employee = new Employee2("David", 28, 55000);
    const decreaseAmount = 10000;
    const expectedSalary = 45000;

    expect(employee.decreaseSalary(decreaseAmount)).toBe(expectedSalary);
    expect(employee.salary).toBe(expectedSalary);

    const employee2 = new Employee2("Eve", 40, 65000);
    const invalidValue = 70000;

    expect(() => {
      employee2.decreaseSalary(invalidValue);
    }).toThrow("The value has to be less than or eqaul to the current salary.");
    expect(employee2.salary).toBe(65000);

    global.score += 1;
  });
});

describe("Manager prototype", () => {
  test("should create a new Manager class with the correct name, age, salary, and team properties", () => {
    const manager = new Manager2("Alice", 35, 90000, "Engineering");
    expect(manager.name).toBe("Alice");
    expect(manager.age).toBe(35);
    expect(manager.salary).toBe(90000);
    expect(manager.team).toBe("Engineering");

    const manager2 = new Manager2("Bob", 40, 100000, "Finance");
    expect(manager2.name).toBe("Bob");
    expect(manager2.age).toBe(40);
    expect(manager2.salary).toBe(100000);
    expect(manager2.team).toBe("Finance");

    expect(manager2.hasOwnProperty("getDetails")).toBe(false);
    expect(manager2.hasOwnProperty("manageTeam")).toBe(false);

    expect(Manager2.prototype.__proto__ === Employee2.prototype).toBe(true);

    global.score += 1;
  });

  test("getDetails and manageTeam should return correct string", () => {
    const manager = new Manager2("Alice", 35, 90000, "Engineering");
    const expectedDetails =
      "Hi I am Alice and I am 35 years old and my salary is 90000 and I am a manager.";

    expect(manager.getDetails()).toBe(expectedDetails);

    const manager2 = new Manager2("Bob", 40, 100000, "Finance");
    const expectedString = "I am Bob and I manage Finance team.";

    expect(manager2.manageTeam()).toBe(expectedString);
    global.score += 0.5;
  });
});

describe("Accountant prototype", () => {
  test("should create a new Accountant class with the correct name, age, salary, and clients properties", () => {
    const accountant = new Accountant2("Debobrota", 65, 150000, [
      "Client I",
      "Client J",
    ]);
    expect(accountant.name).toBe("Debobrota");
    expect(accountant.age).toBe(65);
    expect(accountant.salary).toBe(150000);
    expect(accountant.clients).toEqual(["Client I", "Client J"]);

    const accountant2 = new Accountant2("Debu", 25, 120000, ["HEY", "HELLO"]);
    expect(accountant2.name).toBe("Debu");
    expect(accountant2.age).toBe(25);
    expect(accountant2.salary).toBe(120000);
    expect(accountant2.clients).toEqual(["HEY", "HELLO"]);

    expect(accountant2.hasOwnProperty("getDetails")).toBe(false);
    expect(accountant2.hasOwnProperty("manageTeam")).toBe(false);

    expect(Accountant2.prototype.__proto__ === Employee2.prototype).toBe(true);

    global.score += 1;
  });

  test("getDetails should return correct string", () => {
    const accountant = new Accountant2("Alice", 35, 90000, [
      "Client A",
      "Client B",
    ]);
    const expectedDetails =
      "Hi I am Alice and I am 35 years old and my salary is 90000 and I am an accountant.";

    expect(accountant.getDetails()).toBe(expectedDetails);
    global.score += 0.5;
  });

  test("manageAccounts should return correct string", () => {
    const accountant = new Accountant2("Bob", 40, 100000, [
      "Client C",
      "Client D",
    ]);
    const expectedString =
      "Bob is managing accounts for clients: Client C,Client D.";

    expect(accountant.manageAccounts()).toBe(expectedString);
    global.score += 1;
  });

  test("addClient should add client correctly", () => {
    const accountant = new Accountant2("Charlie", 45, 110000, []);
    const addedClient = "Client E";
    expect(accountant.addClient(addedClient)).toBe(
      `${addedClient} added successfully.`
    );
    expect(accountant.clients).toEqual([addedClient]);
    global.score += 0.5;
  });

  test("addClient should throw an error for invalid input", () => {
    const accountant = new Accountant2("David", 50, 120000, []);
    expect(() => {
      accountant.addClient(123);
    }).toThrow("skill has to be non-empty string.");
    expect(accountant.clients).toEqual([]);
    global.score += 0.5;
  });

  test("removeClient should remove client correctly", () => {
    const accountant = new Accountant2("Eve", 55, 130000, [
      "Client F",
      "Client G",
    ]);
    const removedClient = "Client F";

    expect(accountant.removeClient(removedClient)).toBe(
      `${removedClient} removed successfully.`
    );
    expect(accountant.clients).toEqual(["Client G"]);
    global.score += 0.5;
  });

  test("removeClient should throw an error for invalid input", () => {
    const accountant = new Accountant2("Frank", 60, 140000, ["Client H"]);

    expect(() => {
      accountant.removeClient(123);
    }).toThrow("client has to be non-empty string.");

    // Ensure clients array remains unchanged
    expect(accountant.clients).toEqual(["Client H"]);
    global.score += 0.5;
  });
});

describe("SeniorManager prototype", () => {
  test("getDetails should return correct string", () => {
    const seniorManager = new SeniorManager2(
      "Alice",
      40,
      120000,
      "Engineering",
      5
    );
    const expectedDetails =
      "Hi I am Alice and I am 40 years old and my salary is 120000 and I am a senior manager.";

    expect(seniorManager.getDetails()).toBe(expectedDetails);
    global.score += 1;
  });

  test("displayYearsInPosition should return correct string", () => {
    const seniorManager = new SeniorManager2("Bob", 45, 130000, "Finance", 7);
    const expectedString =
      "Bob has been in the position of senior manager for 7 years.";

    expect(seniorManager.displayYearsInPosition()).toBe(expectedString);
    global.score += 1;
  });

  test("should create a new SeniorManager2 class with the correct name, age, salary, team, and yearsInPosition properties", () => {
    const seniorManager = new SeniorManager2(
      "Debu haldar",
      50,
      140000,
      "problem solver",
      10
    );
    expect(seniorManager.name).toBe("Debu haldar");
    expect(seniorManager.age).toBe(50);
    expect(seniorManager.salary).toBe(140000);
    expect(seniorManager.team).toBe("problem solver");
    expect(seniorManager.yearsInPosition).toBe(10);

    const seniorManager2 = new SeniorManager2(
      "Adarsha",
      50,
      140000,
      "teaching",
      10
    );
    expect(seniorManager2.name).toBe("Adarsha");
    expect(seniorManager2.age).toBe(50);
    expect(seniorManager2.salary).toBe(140000);
    expect(seniorManager2.team).toBe("teaching");
    expect(seniorManager2.yearsInPosition).toBe(10);

    expect(seniorManager2.hasOwnProperty("getDetails")).toBe(false);
    expect(seniorManager2.hasOwnProperty("displayYearsInPosition")).toBe(false);

    expect(SeniorManager2.prototype.__proto__ === Manager2.prototype).toBe(
      true
    );

    global.score += 1;
  });
});

// describe("Developer prototype", () => {
//   test("getDetails should return correct string", () => {
//     const developer = new Developer("Alice", 30, 90000, [
//       "JavaScript",
//       "React",
//     ]);
//     const expectedDetails =
//       "Hi I am Alice and I am 30 years old and my salary is 90000 and I am a developer.";

//     expect(developer.getDetails()).toBe(expectedDetails);
//     global.score += 1;
//   });

//   test("addSkill should add skill correctly", () => {
//     const developer = new Developer("Bob", 35, 100000, []);
//     const addedSkill = "Node.js";

//     expect(developer.addSkill(addedSkill)).toBe(
//       `${addedSkill} added successfully.`
//     );
//     expect(developer.techStack).toEqual([addedSkill]);
//     global.score += 1;
//   });

//   test("addSkill should throw an error for invalid input", () => {
//     const developer = new Developer("Charlie", 40, 110000, []);

//     expect(() => {
//       developer.addSkill(123);
//     }).toThrow("skill has to be non-empty string.");
//     expect(developer.techStack).toEqual([]);
//     global.score += 1;
//   });

//   test("removeSkill should remove skill correctly", () => {
//     const developer = new Developer("David", 45, 120000, ["Java", "Spring"]);
//     const removedSkill = "Spring";

//     expect(developer.removeSkill(removedSkill)).toBe(
//       `${removedSkill} removed successfully.`
//     );
//     expect(developer.techStack).toEqual(["Java"]);
//     global.score += 1;
//   });

//   test("removeSkill should throw an error for invalid input", () => {
//     const developer = new Developer("Eve", 50, 130000, ["React"]);

//     expect(() => {
//       developer.removeSkill(123);
//     }).toThrow("skill has to be non-empty string.");
//     expect(developer.techStack).toEqual(["React"]);
//     global.score += 1;
//   });

//   test("should create a new Developer class with the correct name, age, salary, and techStack properties", () => {
//     const developer = new Developer("Debobrota", 24, 240000, [
//       "React",
//       "javascript",
//     ]);
//     expect(developer.name).toBe("Debobrota");
//     expect(developer.age).toBe(24);
//     expect(developer.salary).toBe(240000);
//     expect(developer.techStack).toEqual(["React", "javascript"]);

//     const developer2 = new Developer("Adarsha", 25, 140000, [
//       "Python",
//       "Django",
//     ]);
//     expect(developer2.name).toBe("Adarsha");
//     expect(developer2.age).toBe(25);
//     expect(developer2.salary).toBe(140000);
//     expect(developer2.techStack).toEqual(["Python", "Django"]);

//     expect(developer2.hasOwnProperty("getDetails")).toBe(false);
//     expect(developer2.hasOwnProperty("removeSkill")).toBe(false);
//     expect(developer2.hasOwnProperty("addSkill")).toBe(false);
//     expect(developer2.hasOwnProperty("getDetails")).toBe(false);

//     expect(Manager2.prototype.__proto__===Employee2.prototype).toBe(true);

//     global.score += 1;
//   });
// });

// Problem 3

describe("Person class", () => {
  test("should create a new Person3 class with the correct name and age properties and has its own property", () => {
    const person = new Person3("Alice", 30);
    expect(person.name).toBe("Alice");
    expect(person.age).toBe(30);

    const person2 = new Person3("Bob", 35);
    expect(person2.name).toBe("Bob");
    expect(person2.age).toBe(35);

    expect(person2.hasOwnProperty("getDetails")).toBe(false);
    expect(person2.hasOwnProperty("increaseAge")).toBe(false);
    expect(person2.hasOwnProperty("decreaseAge")).toBe(false);

    global.score += 1;
  });

  test("getDetails should return correct string", () => {
    const person = new Person3("Alice", 30);
    const expectedDetails = "Alice is 30 years old.";

    expect(person.getDetails()).toBe(expectedDetails);
    global.score += 0.5;
  });

  test("increaseAge and decreaseAge should working correctly", () => {
    const person = new Person3("Bob", 35);
    person.increaseAge();

    expect(person.age).toBe(36);

    const person2 = new Person3("Charlie", 40);
    person2.decreaseAge();

    expect(person2.age).toBe(39);

    const decreseAgeError = new Person3("David", 25);
    decreseAgeError.age = 0;

    expect(() => {
      decreseAgeError.decreaseAge();
    }).toThrow("Age can't be decreased beyond zero.");

    global.score += 1;
  });
});

describe("Employee class", () => {
  test("should create a new Employee3 class with required properties and should extends the Person class", () => {
    const employee = new Employee3("Debu", 23, 54543);
    expect(employee.name).toBe("Debu");
    expect(employee.age).toBe(23);
    expect(employee.salary).toBe(54543);

    const employee2 = new Employee3("Adarsha", 25, 56789);
    expect(employee2.name).toBe("Adarsha");
    expect(employee2.age).toBe(25);
    expect(employee2.salary).toBe(56789);

    expect(employee2.hasOwnProperty("getDetails")).toBe(false);
    expect(employee2.hasOwnProperty("increaseSalary")).toBe(false);
    expect(employee2.hasOwnProperty("decreaseSalary")).toBe(false);

    expect(Employee3.prototype.__proto__ === Person3.prototype).toBe(true);

    global.score += 1;
  });

  test("getDetails should return correct string", () => {
    const employee = new Employee3("Alice", 30, 60000);
    const expectedDetails =
      "Hi I am Alice and I am 30 years old and my salary is 60000.";

    expect(employee.getDetails()).toBe(expectedDetails);
    global.score += 0.5;
  });

  test("increaseSalary should working correctly", () => {
    const employee = new Employee3("Bob", 35, 70000);
    const increaseAmount = 5000;

    expect(employee.increaseSalary(increaseAmount)).toBe(75000);
    const employeeError = new Employee3("Charlie", 40, 80000);
    expect(() => {
      employeeError.increaseSalary("5000");
    }).toThrow("value has to be positive integer and greater than zero.");
    expect(employeeError.salary).toBe(80000);
    global.score += 1;
  });

  test("decreaseSalary should working correctly", () => {
    const employee = new Employee3("David", 45, 90000);
    const decreaseAmount = 10000;

    expect(employee.decreaseSalary(decreaseAmount)).toBe(80000);

    const employeeError1 = new Employee3("Eve", 50, 100000);
    expect(() => {
      employeeError1.decreaseSalary(-5000);
    }).toThrow("value has to be positive integer and greater than zero.");
    expect(employeeError1.salary).toBe(100000);

    const employeeError2 = new Employee3("Frank", 55, 110000);

    expect(() => {
      employeeError2.decreaseSalary(120000);
    }).toThrow("The value has to be less than or eqaul to the current salary.");
    expect(employeeError2.salary).toBe(110000);
    global.score += 1;
  });
});

describe("Manager class", () => {
  test("should create a new Manager3 class with required properties and extends Employee", () => {
    const manager = new Manager3("Charlie", 40, 80000, "Marketing");
    expect(manager.name).toBe("Charlie");
    expect(manager.age).toBe(40);
    expect(manager.salary).toBe(80000);
    expect(manager.team).toBe("Marketing");

    expect(manager.hasOwnProperty("getDetails")).toBe(false);
    expect(manager.hasOwnProperty("manageTeam")).toBe(false);

    expect(Manager3.prototype.__proto__ === Employee3.prototype).toBe(true);

    global.score += 1;
  });

  test("getDetails and manageTeam should return correct string", () => {
    const manager = new Manager3("Alice", 30, 60000, "Engineering");
    const expectedDetails =
      "Hi I am Alice and I am 30 years old and my salary is 60000 and I am a manager.";

    expect(manager.getDetails()).toBe(expectedDetails);

    const manager2 = new Manager3("Bob", 35, 70000, "Finance");
    const expectedString = "I am Bob and I manage Finance team.";

    expect(manager2.manageTeam()).toBe(expectedString);

    global.score += 0.5;
  });
});

describe("Accountant class", () => {
  test("should create anew Accountant3 class with the required properties and should extends Employee class", () => {
    const accountant = new Accountant3("Debu", 23, 54543, [
      "Client1",
      "Client2",
    ]);
    expect(accountant.name).toBe("Debu");
    expect(accountant.age).toBe(23);
    expect(accountant.salary).toBe(54543);
    expect(accountant.clients).toEqual(["Client1", "Client2"]);

    const accountant2 = new Accountant3("Nishut", 23, 54543, [
      "Debu",
      "Adarsha",
    ]);
    expect(accountant2.name).toBe("Nishut");
    expect(accountant2.age).toBe(23);
    expect(accountant2.salary).toBe(54543);
    expect(accountant2.clients).toEqual(["Debu", "Adarsha"]);

    expect(accountant2.hasOwnProperty("getDetails")).toBe(false);
    expect(accountant2.hasOwnProperty("manageAccounts")).toBe(false);
    expect(accountant2.hasOwnProperty("addClient")).toBe(false);
    expect(accountant2.hasOwnProperty("removeClient")).toBe(false);

    expect(Accountant3.prototype.__proto__ === Employee3.prototype).toBe(true);

    global.score += 1;
  });

  test("getDetails should return correct string", () => {
    const accountant = new Accountant3("Alice", 30, 60000, [
      "Client A",
      "Client B",
    ]);
    const expectedDetails =
      "Hi I am Alice and I am 30 years old and my salary is 60000 and I am an accountant.";

    expect(accountant.getDetails()).toBe(expectedDetails);
    global.score += 0.5;
  });

  test("manageAccounts should return correct string", () => {
    const accountant = new Accountant3("Bob", 35, 70000, [
      "Client A",
      "Client B",
    ]);
    const expectedString =
      "Bob is managing accounts for clients: Client A,Client B.";

    expect(accountant.manageAccounts()).toBe(expectedString);
    global.score += 1;
  });

  test("addClient should add a client correctly and should throw an correct error", () => {
    const accountant = new Accountant3("Charlie", 40, 80000, [
      "Client A",
      "Client B",
    ]);
    const newClient = "Client C";

    expect(accountant.addClient(newClient)).toBe(
      `${newClient} added successfully.`
    );
    expect(accountant.clients).toContain(newClient);

    const accountant2 = new Accountant3("David", 45, 90000, [
      "Client A",
      "Client B",
    ]);

    expect(() => {
      accountant2.addClient("");
    }).toThrow("skill has to be non-empty string.");
    expect(accountant2.clients).toEqual(["Client A", "Client B"]);

    global.score += 1;
  });

  test("removeClient should remove a client correctly and should throw an error for invalid input", () => {
    const accountant = new Accountant3("Eve", 50, 100000, [
      "Client A",
      "Client B",
    ]);
    const clientToRemove = "Client B";

    expect(accountant.removeClient(clientToRemove)).toBe(
      `${clientToRemove} removed successfully.`
    );
    expect(accountant.clients).not.toContain(clientToRemove);

    const accountant2 = new Accountant3("Frank", 55, 110000, [
      "Client A",
      "Client B",
    ]);
    expect(() => {
      accountant2.removeClient(123);
    }).toThrow("client has to be non-empty string.");
    expect(accountant2.clients).toEqual(["Client A", "Client B"]);

    global.score += 1;
  });
});

describe("SeniorManager class", () => {
  test("should create a new SeniorManager3 class with the correct name, age, salary, team, and yearsInPosition properties", () => {
    const seniorManager = new SeniorManager3(
      "Charlie",
      50,
      140000,
      "Marketing",
      10
    );
    expect(seniorManager.name).toBe("Charlie");
    expect(seniorManager.age).toBe(50);
    expect(seniorManager.salary).toBe(140000);
    expect(seniorManager.team).toBe("Marketing");
    expect(seniorManager.yearsInPosition).toBe(10);

    expect(seniorManager.hasOwnProperty("getDetails")).toBe(false);
    expect(seniorManager.hasOwnProperty("displayYearsInPosition")).toBe(false);

    expect(SeniorManager.prototype.__proto__ === Manager.prototype).toBe(true);

    global.score += 1;
  });

  test("getDetails should return correct string", () => {
    const seniorManager = new SeniorManager3(
      "Alice",
      40,
      120000,
      "Engineering",
      5
    );
    const expectedDetails =
      "Hi I am Alice and I am 40 years old and my salary is 120000 and I am a senior manager.";

    expect(seniorManager.getDetails()).toBe(expectedDetails);
    global.score += 0.5;
  });

  test("displayYearsInPosition should return correct string", () => {
    const seniorManager = new SeniorManager3("Bob", 45, 130000, "Finance", 8);
    const expectedString =
      "Bob has been in the position of senior manager for 8 years.";

    expect(seniorManager.displayYearsInPosition()).toBe(expectedString);
    global.score += 0.5;
  });
});

// describe("Developer3 class", () => {

//   test("should create anew Accountant3 class with required properties and should extends Employee class", () => {
//     const developer = new Developer3("Debu", 23, 54543, [
//       "JS",
//       "React",
//     ]);
//     expect(developer.name).toBe("Debu");
//     expect(developer.age).toBe(23);
//     expect(developer.salary).toBe(54543);
//     expect(developer.techStack).toEqual(["JS", "React"]);
//     expect(developer.hasOwnProperty("getDetails")).toBe(false);
//     expect(developer.hasOwnProperty("addSkill")).toBe(false);
//     expect(developer.hasOwnProperty("removeSkill")).toBe(false);
//     expect(Developer3.prototype.__proto__===Employee3.prototype).toBe(true);

//     global.score += 1;
//   });

//   test("getDetails should return correct string", () => {
//     const developer = new Developer3("Alice", 30, 60000, [
//       "JavaScript",
//       "React",
//     ]);
//     const expectedDetails =
//       "Hi I am Alice and I am 30 years old and my salary is 60000 and I am a developer.";

//     expect(developer.getDetails()).toBe(expectedDetails);
//     global.score += 0.5;
//   });

//   test("addSkill should add a skill correctly and should throw an error for invalid input", () => {
//     const developer = new Developer3("Bob", 35, 70000, ["HTML", "CSS"]);
//     const newSkill = "Node.js";

//     expect(developer.addSkill(newSkill)).toBe(
//       `${newSkill} added successfully.`
//     );
//     expect(developer.techStack).toContain(newSkill);

//     const developer2 = new Developer3("Charlie", 40, 80000, ["Java", "Spring"]);

//     expect(() => {
//       developer2.addSkill("");
//     }).toThrow("skill has to be non-empty string.");
//     expect(developer2.techStack).toEqual(["Java", "Spring"]);
//     global.score += 1;
//   });

//   test("removeSkill should remove a skill correctly and should throw an error for invalid input", () => {
//     const developer = new Developer3("David", 45, 90000, ["Python", "Django"]);
//     const skillToRemove = "Django";

//     expect(developer.removeSkill(skillToRemove)).toBe(
//       `${skillToRemove} removed successfully.`
//     );
//     expect(developer.techStack).not.toContain(skillToRemove);

//     const developer2 = new Developer3("Eve", 50, 100000, ["React", "Vue"]);
//     expect(() => {
//       developer2.removeSkill(123);
//     }).toThrow("skill has to be non-empty string.");
//     expect(developer2.techStack).toEqual(["React", "Vue"]);

//     global.score += 0.5;
//   });
// });

//---

// describe("SeniorDeveloper", () => {
//   test("getDetails should return correct string", () => {
//     const seniorDeveloper = new SeniorDeveloper(
//       "Alice",
//       30,
//       60000,
//       ["JavaScript", "React"],
//       5
//     );
//     const expectedDetails =
//       "Hi I am Alice and I am 30 years old and I have worked in 5 projects.";

//     expect(seniorDeveloper.getDetails()).toBe(expectedDetails);
//     global.score += 0.5;
//   });

//   test("mentorJuniorDevelopers should return correct string", () => {
//     const seniorDeveloper = new SeniorDeveloper(
//       "Bob",
//       35,
//       70000,
//       ["HTML", "CSS"],
//       8
//     );
//     const expectedString = "Bob is mentoring junior developers in the team.";

//     expect(seniorDeveloper.mentorJuniorDevelopers()).toBe(expectedString);
//     global.score += 0.5;
//   });

//   test("updateProject should working correctly and should throw an error for invalid input", () => {
//     const seniorDeveloper = new SeniorDeveloper(
//       "Charlie",
//       40,
//       80000,
//       ["Java", "Spring"],
//       10
//     );
//     const newProjectsCompleted = 15;

//     seniorDeveloper.updateProject(newProjectsCompleted);
//     expect(seniorDeveloper.projectsCompleted).toBe(newProjectsCompleted);

//     const seniorDeveloper2 = new SeniorDeveloper(
//       "David",
//       45,
//       90000,
//       ["Python", "Django"],
//       12
//     );

//     expect(() => {
//       seniorDeveloper2.updateProject(-5);
//     }).toThrow("Value has to be positive integer.");
//     expect(seniorDeveloper2.projectsCompleted).toBe(12);

//     global.score += 1;
//   });

//   test("should create a new SeniorDeveloper class with the correct name, age, salary, techStack, and projectsCompleted properties", () => {
//     const seniorDeveloper = new SeniorDeveloper(
//       "Eve",
//       50,
//       100000,
//       ["React", "Vue"],
//       20
//     );
//     expect(seniorDeveloper.name).toBe("Eve");
//     expect(seniorDeveloper.age).toBe(50);
//     expect(seniorDeveloper.salary).toBe(100000);
//     expect(seniorDeveloper.techStack).toEqual(["React", "Vue"]);
//     expect(seniorDeveloper.projectsCompleted).toBe(20);

//     expect(seniorDeveloper.hasOwnProperty("getDetails")).toBe(false);
//     expect(seniorDeveloper.hasOwnProperty("mentorJuniorDevelopers")).toBe(false);
//     expect(seniorDeveloper.hasOwnProperty("updateProject")).toBe(false);
//     global.score += 0.5;
//   });
// });

// problem 4
describe("Product", () => {
  test("should create a new Product instance with the correct name, price, and discount properties", () => {
    const product = new Product("Laptop", 1000, 10);
    expect(product.name).toBe("Laptop");
    expect(product.getPrice).toBe(1000);
    expect(product.getDiscount).toBe(10);

    global.score += 1;
  });

  test("getDiscountedPrice should return the correct discounted price", () => {
    const product = new Product("Phone", 500, 20);
    expect(product.getDiscountedPrice()).toBe(400);

    const product2 = new Product("Laptop", 1000, 10);
    expect(product2.getDiscountedPrice()).toBe(900);
    global.score += 1;
  });

  test("setPrice and getPrice should working correctly ", () => {
    const product = new Product("Tablet", 300, 15);
    product.setPrice = 250;
    expect(product.getPrice).toBe(250);

    const product2 = new Product("Laptop", 1000, 10);
    expect(product2.getPrice).toBe(1000);

    global.score += 0.5;
  });

  test("setPrice should throw an error for non-number price and for negetive price", () => {
    const product2 = new Product("Chair", 50, 5);
    expect(() => {
      product2.setPrice = -100;
    }).toThrow("price has to be positive number only");

    const product = new Product("Monitor", 200, 10);
    expect(() => {
      product.setPrice = "invalid";
    }).toThrow("price has to be positive number only");
    global.score += 1;
  });

  test("should return the discount percentage of the product", () => {
    const product = new Product("Phone", 500, 20);
    expect(product.getDiscount).toBe(20);
    global.score += 0.5;
  });

  test("should calculate and return the total discount for the given product", () => {
    const product = new Product("Tablet", 300, 15);
    const totalDiscount = Product.calculateTotalDiscount(product);
    expect(totalDiscount).toBe(45);
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
