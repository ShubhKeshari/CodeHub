//Person constructor function

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
  increaseAge() {
    this.age++;
    return this.age;
  }
  decreaseAge() {
    if (this.age <= 0) {
      throw new Error("Age can't be decreased beyond zero.");
    } else {
      this.age--;
      return this.age;
    }
  }
}

// let person =new Person ("Priya",28)
// console.log(person)//{name:"Priya",age:28}
// console.log(person.getDetails())//Priya is 28 years old.
// console.log(person.increaseAge()) //29
// console.log(person)//{name:"Priya",age:29};
// console.log(person.decreaseAge()) //28
// console.log(person)//{name:"Priya",age:28};

//to create Employee constructor function

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  getDetails() {
    return `Hi I am ${this.name} and I am ${this.age} years old and my salary is ${this.salary}.`;
  }
  increaseSalary(val) {
    if (typeof val !== "number" || val < 0) {
      throw new Error(
        "value has to be positive integer and greater than zero."
      );
    } else {
      this.salary += val;
      return this.salary;
    }
  }
  decreaseSalary(val) {
    if (typeof val !== "number" || val < 0) {
      throw new Error(
        "value has to be positive integer and greater than zero."
      );
    } else if (val > this.salary) {
      throw new Error(
        "The value has to be less than or eqaul to the current salary."
      );
    } else {
      this.salary -= val;
      return this.salary;
    }
  }
}

// let employee1 = new Employee("Ram", 45, 150000);
// console.log(employee1)//{name:"Ram",age:45,salary:150000}
// console.log(employee1.getDetails()); // "Hi I am Ram and I am 45 years old and my salary is 150000."
// console.log(employee1.increaseAge())//46
// console.log(employee1.decreaseAge())//45
// console.log(employee1.decreaseAge())//44
// console.log(employee1.increaseSalary(50000))//200000;
// console.log(employee1)//{name:"Ram",age:45,salary:200000}
// console.log(employee1.decreaseSalary(30000))//170000;
// console.log(employee1)//{name:"Ram",age:45,salary:170000}

//to create Manager constructor function

class Manager extends Employee {
  constructor(name, age, salary, team) {
    super(name, age, salary);
    this.team = team;
  }
  getDetails() {
    return `Hi I am ${this.name} and I am ${this.age} years old and my salary is ${this.salary} and I am a manager.`;
  }
  manageTeam() {
    return `I am ${this.name} and I manage ${this.team} team.`;
  }
}

// let manager1 = new Manager("Virat", 30, 50000, "developer");
// console.log(manager1.getDetails()); //"Hi I am Virat and I am 30 years old and my salary is 50000 and I am a manager."
// console.log(manager1.manageTeam())//"I am Virat and I manage developer team."

//to create Accountant constructor function

class Accountant extends Employee {
  constructor(name, age, salary, clients) {
    super(name, age, salary);
    this.clients = clients;
  }
  getDetails() {
    return `Hi I am ${this.name} and I am ${this.age} years old and my salary is ${this.salary} and I am an accountant.`;
  }
  manageAccounts() {
    return `${this.name} is managing accounts for clients: ${this.clients}.`;
  }
  addClient(client) {
    if (typeof client !== "string" || client === "") {
      throw new Error(`skill has to be non-empty string.`);
    } else {
      this.clients.push(client);
      return `${client} added successfully.`;
    }
  }
  removeClient(client) {
    if (typeof client !== "string" || client === "") {
      throw new Error(`client has to be non-empty string.`);
    } else {
      this.clients = this.clients.filter((item) => item !== client);
      return `${client} removed successfully.`;
    }
  }
}

// let accountant1 = new Accountant("Ankur",27,500000,["tcs","wipro"]);
// console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","wipro"]}

// accountant1.getDetails()//Hi I am Ankur and I am 27 years old and my salary is 500000 and I am an accountant.

// accountant1.addClient("pwc");//pwc added successfully.
// console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","wipro","pwc"]}

// accountant1.removeClient("wipro");//wipro removed successfully.
// console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","pwc"]}

//to create SeniorManager constructor function

class SeniorManager extends Manager {
  constructor(name, age, salary, team, yearsInPosition) {
    super(name, age, salary, team);
    this.yearsInPosition = yearsInPosition;
  };
  getDetails() {
    return `Hi I am ${this.name} and I am ${this.age} years old and my salary is ${this.salary} and I am a senior manager.`;
  };
  displayYearsInPosition() {
    return `${this.name} has been in the position of senior manager for ${this.yearsInPosition} years.`;
  };
}

export { Person, Employee, Manager, Accountant, SeniorManager };
