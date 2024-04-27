//Person factory function
Person.prototype = {
  getDetails: function () {
    return `${this.name} is ${this.age} years old.`;
  },
  increaseAge: function () {
    this.age++;
    return this.age;
  },
  decreaseAge: function () {
    if (this.age <= 0) {
      throw new Error("Age can't be decreased beyond zero.");
    } else {
      this.age--;
      return this.age;
    }
  },
};
function Person(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  Object.setPrototypeOf(obj, Person.prototype);
  return obj;
}
// let pers= Person("Hello", 23);
// console.log("person----", pers.hasOwnProperty("increaseAge"));

// let person = Person ("Priya",28)
// console.log(person)//{name:"Priya",age:28}
// console.log(person.getDetails())//Priya is 28 years old.
// console.log(person.increaseAge()) //29
// console.log(person)//{name:"Priya",age:29};
// console.log(person.decreaseAge()) //28
// console.log(person)//{name:"Priya",age:28};

//to create Employee factory function
Employee.prototype = {
  getDetails: function () {
    return `Hi, I am ${this.name} and I am ${this.age} years old and my salary is ${this.salary}.`;
  },
  increaseSalary: function (val) {
    if (typeof val !== "number" || val < 0) {
      throw new Error(
        "value has to be positive integer and greater than zero."
      );
    } else {
      this.salary += val;
      return this.salary;
    }
  },
  decreaseSalary: function (val) {
    if (typeof val !== "number" || val < 0) {
      throw new Error(
        "value has to be positive integer and greater than zero."
      );
    } else if (val > this.salary) {
      throw new Error(
        "The value has to be less than or equal to the current salary."
      );
    } else {
      this.salary -= val;
      return this.salary;
    }
  },
};
Object.setPrototypeOf(Employee.prototype, Person.prototype);
function Employee(name, age, salary) {
  let obj = Person(name, age);
  obj.salary = salary;
  Object.setPrototypeOf(obj, Employee.prototype);
  return obj;
}

// let employee1 =  Employee("Ram", 45, 150000);
// console.log(employee1)//{name:"Ram",age:45,salary:150000}
// console.log(employee1.getDetails()); // "Hi I am Ram and I am 45 years old and my salary is 150000."
// console.log(employee1.increaseAge())//46
// console.log(employee1.decreaseAge())//45
// console.log(employee1.decreaseAge())//44
// console.log(employee1.increaseSalary(50000))//200000;
// console.log(employee1)//{name:"Ram",age:45,salary:200000}
// console.log(employee1.decreaseSalary(30000))//170000;
// console.log(employee1)//{name:"Ram",age:45,salary:170000}

//to create Manager factory function
Manager.prototype = {
  getDetails: function () {
    return `Hi, I am ${this.name} and I am ${this.age} years old and my salary is ${this.salary} and I am a manager.`;
  },
  manageTeam: function () {
    return `I am ${this.name} and I manage ${this.team} team.`;
  },
};
Object.setPrototypeOf(Manager.prototype, Employee.prototype);
function Manager(name, age, salary, team) {
  let obj = Employee(name, age, salary);
  obj.team = team;
  Object.setPrototypeOf(obj, Manager.prototype);
  return obj;
}

// let manager1 = Manager("Virat", 30, 50000, "developer");
// console.log(manager1.getDetails()); //"Hi I am Virat and I am 30 years old and my salary is 50000 and I am a manager."
// console.log(manager1.manageTeam())//"I am Virat and I manage developer team."

//to create Accountant factory function
Accountant.prototype = {
  getDetails: function () {
    return `Hi I am ${this.name} and I am ${this.age} years old and my salary is ${this.salary} and I am an accountant.`;
  },
  manageAccounts: function () {
    return `${this.name} is managing accounts for clients: ${this.clients}.`;
  },
  addClient: function (client) {
    if (typeof client !== "string" || client === "") {
      throw new Error(`skill has to be non-empty string.`);
    } else {
      this.clients.push(client);
      return `${client} added successfully.`;
    }
  },
  removeClient: function (client) {
    if (typeof client !== "string" || client === "") {
      throw new Error(`client has to be non-empty string.`);
    } else {
      this.clients = this.clients.filter((item) => item !== client);
      return `${client} removed successfully.`;
    }
  },
};

Object.setPrototypeOf(Accountant.prototype, Employee.prototype);
function Accountant(name, age, salary, clients) {
  let obj = Employee(name, age, salary);
  obj.clients = clients;
  Object.setPrototypeOf(obj, Accountant.prototype);
  return obj;
}

// let accountant1 = Accountant("Ankur",27,500000,["tcs","wipro"]);
// console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","wipro"]}

// accountant1.getDetails()//Hi I am Ankur and I am 27 years old and my salary is 500000 and I am an accountant.

// accountant1.addClient("pwc");//pwc added successfully.
// console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","wipro","pwc"]}

// accountant1.removeClient("wipro");//wipro removed successfully.
// console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","pwc"]}

//to create SeniorManager factory function
SeniorManager.prototype = {
  getDetails: function () {
    return `Hi I am ${this.name} and I am ${this.age} years old and my salary is ${this.salary} and I am a senior manager.`;
  },
  displayYearsInPosition: function () {
    return `${this.name} has been in the position of senior manager for ${this.yearsInPosition} years.`;
  },
};
Object.setPrototypeOf(SeniorManager.prototype, Manager.prototype);
function SeniorManager(name, age, salary, team, yearsInPosition) {
  let obj = Manager(name, age, salary, team);
  obj.yearsInPosition = yearsInPosition;
  Object.setPrototypeOf(obj, SeniorManager.prototype);
  return obj;
}

// Object.setPrototypeOf(SeniorDeveloper.prototype, Developer.prototype);

export {
  Person,
  Employee,
  Manager,
  Accountant,
  SeniorManager,
  // Developer,
  // SeniorDeveloper,
};
