## JS-Prototypical-inheritance

### Submission Instructions [Please note]

## Maximum Marks - 50

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

### Problem - 1 Test cases - 16 marks

```
    ✅ should able to submit app correctly - 1 marks
   ### Person object
    ✅ should create a new Person object with the correct name and age - 1 marks
    ✅ should getDetails of Person object with the correct message - 0.5 marks
    ✅ should able to increase and decreased the person age  - 0.5 marks
  ### Employee object
    ✅ should create a new Employee object with the correct name, age and salary properties - 1 marks
    ✅ should getDetails of Employee object with the correct message - 0.5 marks
    ✅ should be able to increase the employee salary - 0.5 marks
    ✅ should throw an error when trying to decrease salary with negative value - 0.5 marks
  ### Manager object
    ✅ should create a new Manager object with the correct name, age, salary, and team properties - 1 marks
    ✅ should getDetails of Manager object with the correct message - 0.5 marks
    ✅ should manageTeam of Manager object with the correct message - 1 marks
 ###  Accountant object
    ✅ should create a new Accountant object with the correct name, age, salary, and clients properties - 1 marks
    ✅ getDetails should return correct string - 0.5 marks
    ✅ manageAccounts should return correct string - 0.5 marks
    ✅ addClient should add client successfully and return correct string - 1 marks
    ✅ removeClient should remove client successfully and return correct string - 1 marks
    ✅ addClient should throw an error for invalid input - 1 marks
    ✅ removeClient should throw an error for invalid input - 1 marks
 ###  SeniorManager object
    ✅ should create a new SeniorManager object with the correct name, age, salary, team, and yearsInPosition properties - 1 marks
    ✅ getDetails should return correct string - 1 marks
    ✅ displayYearsInPosition should return correct string - 1 marks
```

### Problem - 2 Testcases - 14 marks

```
     ### Person prototype
    ✅ should create a new Person object with the correct name and age properties - 1 marks
    ✅ getDetails should return correct string - 0.5 marks
    ✅ increaseAge and decreaseAge should working correctly and decreaseAge should throw an error when age is already zero - 1 marks
  ### Employee prototype
    ✅ should create a new Employee object with the correct name, age, and salary properties - 1 marks
    ✅ getDetails should return correct string - 0.5 marks
    ✅ increaseSalary should working correctly and should throw an error for invalid input - 1 marks
    ✅ decreaseSalary should working correctly and should throw an error when value is greater than the current salary or invalid input - 1 marks
 ###  Manager prototype
    ✅ should create a new Manager class with the correct name, age, salary, and team properties - 1 marks
    ✅ getDetails and manageTeam should return correct string -0.5 marks
  ### Accountant prototype
    ✅ should create a new Accountant object with the correct name, age, salary, and clients properties - 1 marks
    ✅ getDetails should return correct string - 0.5 marks
    ✅ manageAccounts should return correct string - 1 marks
    ✅ addClient should add client correctly - 0.5 marks
    ✅ addClient should throw an error for invalid input - 0.5 marks
    ✅ removeClient should remove client correctly - 0.5 marks
    ✅ removeClient should throw an error for invalid input - 0.5 marks
  ### SeniorManager prototype
    ✅ getDetails should return correct string - 1 marks
    ✅ displayYearsInPosition should return correct string - 1 marks
    ✅ should create a new SeniorManager object with the correct name, age, salary, team, and yearsInPosition properties - 1 marks

```

### Problem 3 - test cases - 15 marks

```
  ### Person class
    ✅ should create a new Person class with the correct name and age properties and has its own property - 1 marks
    ✅ getDetails should return correct string - 0.5 marks
    ✅ increaseAge and decreaseAge should working correctly - 1 marks
  ### Employee class
    ✅ should create a new Employee class with required properties and should extends the Person class - 1 marks
    ✅ getDetails should return correct string - 0.5 marks
    ✅ increaseSalary should working correctly - 1 marks
    ✅ decreaseSalary should working correctly - 1 marks
  ### Manager class
    ✅ should create a new Manager class with required properties and extends Employee - 1 marks
    ✅ getDetails and manageTeam should return correct string - 0.5 marks
  ###  Accountant class
    ✅ should create a new Accountant class with the required properties and should extends Employee class - 1 marks
    ✅ getDetails should return correct string - 0.5 marks
    ✅ manageAccounts should return correct string - 1 marks
    ✅ addClient should add a client correctly and should throw an correct error - 1 marks
    ✅ removeClient should remove a client correctly and should throw an error for invalid input - 1 marks
  ### SeniorManager class
    ✅ should create a new SeniorManager class with the correct name, age, salary, team, and yearsInPosition properties - 1 marks
    ✅ getDetails should return correct string - 0.5 marks
    ✅ displayYearsInPosition should return correct string - 0.5 marks

```

### Problem 4 - test cases - 5 marks

```
 ### Product
    ✅ should create a new Product instance with the correct name, price, and discount properties - 1 marks
    ✅ getDiscountedPrice should return the correct discounted price - 1 marks
    ✅ setPrice and getPrice should working correctly - 0.5 marks
    ✅ setPrice should throw an error for non-number price and for negetive price - 1 marks
    ✅ should return the discount percentage of the product - 0.5 marks
    ✅ should calculate and return the total discount for the given product - 1 marks

```

## Installation

- Use node version(LTS) should be `v16` and above
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Run **npm install** or **npm install --engine-strict** to install the node modules
- Run **npm test** for the test cases

## Boilerplate

- Do not change the given folder structure
- inside src, you will find the `problem1.js`, `problem2.js`, `problem3.js` and `problem4.js` file that is where you need to write the code
- you can find the test case under `__tests__ ` folder. Do not change or overwrite the test cases.

<span style="color: red">Note: all the return statements/ messages while creating methods are case sensitive please try to follow as it is you can check using a running test case otherwise you will lose marks for a particular part</span>.

### Description

## **Problem 1 :**

<img src="https://i.imgur.com/cqhdbI0.png"></img>

### Points to note for Person factory function:

<img src="https://i.imgur.com/LnTccIP.png"></img>

- Define a factory function for a **_Person_** that takes two parameter

  1. name: string
  2. age: number

- The Person should create a new obj with the given properties name and age.
- Define the following method for the Person function called **_`getDetails`_** that **_`returns`_** a string with the `name`, `age` of the person.

- console.log(person.getDetails())

  - return : `{name} is {age} years old.`

- **_`increaseAge`_** that increase the age by 1 and **_`returns`_** the updated age.
- **_`decreaseAge`_** that decrease the age by 1 and **_`returns`_** the updated age. If the age is less zero then throw an error `Age can't be decreased beyond zero.`

#### Example usage for the Person factory function

```
let person = Person ("Priya",28)
console.log(person)//{name:"Priya",age:28}
console.log(person.getDetails())//Priya is 28 years old.
console.log(person.increaseAge()) //29
console.log(person)//{name:"Priya",age:29};
console.log(person.decreaseAge()) //28
console.log(person)//{name:"Priya",age:28};
```

### Points to note for Employee factory function :

<img src="https://i.imgur.com/l8eXCby.png"></img>

- Define a factory function `Employee`, that _inherits_ from _Person_ and takes three parameters.

  1. name: string
  2. age: number
  3. salary: number

- The factory function should create a new Employee object with the given properties name, age, salary.
- Define a method for the Employee called **_` getDetails`_** that **_`returns`_** a string with the `name`, `age`, `salary`, of the Employee.

- console.log(employee.getDetails())
  - return: `Hi I am {name} and I am {age} years old and my salary is {salary}.`
- **_` increaseSalary`_** that increases the salary by the given amount and **_`returns`_** the updated salary.
  - if the given value is less than zero or not a number then through an error saying `value has to be positive integer and greater than zero.`
- **_` decreaseSalary`_** that decreases the salary by the given amount and **_`returns`_** the updated salary.
  - if the given value is less than zero or not a number then through an error saying `value has to be positive integer and greater than zero.`
  - if the value is greater than the salary then through an error saying `The value has to be less than or equal to the current salary.`

#### Example usage for Employee factory function

```
let employee1 =  Employee("Ram", 45, 150000);

console.log(employee1)//{name:"Ram",age:45,salary:150000}

console.log(employee1.getDetails()); // "Hi I am Ram and I am 45 years old and my salary is 150000."

console.log(employee1.increaseAge())//46
console.log(employee1.decreaseAge())//45
console.log(employee1.decreaseAge())//44

console.log(employee1.increaseSalary(50000))//200000;
console.log(employee1)//{name:"Ram",age:45,salary:200000}

console.log(employee1.decreaseSalary(30000))//170000;
console.log(employee1)//{name:"Ram",age:45,salary:170000}

```

### Points to note for Manager factory function :

<img src="https://i.imgur.com/m1dAtpi.png"></img>

- Define a factory fuction `Manager`, that inherits from _Employee_ and takes four parameters.

  1. name: string
  2. age: number
  3. salary: number
  4. team: string(`accountant`/`developer`)

- The factory fuction should create a new Manager object with the given properties name, age, salary, and team.
- Define a method for the Manager called **_` getDetails`_** that **_`returns`_** a string with the `name`, `age`, `salary`,of the manager.

- console.log(manager.getDetails())
  - return : `Hi I am {name} and I am {age} years old and my salary is {salry} and I am a manager.`
- **_`manageTeam`_** that returns a string with `name` and `team` of the manager.
  - return: `I am {name} and I manage {team} team.`

#### Example usage for Manager factory function

```
let manager1 = Manager("Virat", 30, 50000, "developer");

console.log(manager1.getDetails()); //"Hi I am Virat and I am 30 years old and my salary is 50000 and I am a manager."

console.log(manager1.manageTeam())//"I am Virat and I manage developer team."
```

### Points to note for Accountant factory function :

<img src="https://i.imgur.com/jbjfsw6.png"></img>

- Define a factory fuction `Accountant`, that inherits from _Employee_ and takes four parameters.

  1. name: string
  2. age: number
  3. salary: number
  4. clients:Array of strings

- The factory fuction should create a new Accountant object with the given properties name, age, salary, and clients.
- Define a method for the accountant called **_` getDetails`_** that **_`returns`_** a string with the `name`, `age`, `salary`,of the accountant.

- console.log(accountant.getDetails())
  - return : `Hi I am {name} and I am {age} years old and my salary is {salary} and I am an accountant.`
- **_`manageAccounts`_** that returns a string with `name` and `team` of the accountant.
  - return: `{name} is managing accounts for clients: ${clients}.`
- **_`addClient`_** that add the given client in the clients array and return string stating `{client} added successfully.`
  - if the client is an empty string or not a string then through an error saying `skill has to be non-empty string.`
- **_`removeClient`_** that remove the given client from the clients array and returns a string stating `{client} removed successfully.`.
  - if the client is an empty string or not a string then through an error saying `skill has to be non-empty string.`

#### Example usage for Accountant factory function

```
let accountant1 = Accountant("Ankur",27,500000,["tcs","wipro"]);
console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","wipro"]}

accountant1.getDetails()//Hi I am Ankur and I am 27 years old and my salary is 500000 and I am an accountant.

accountant1.addClient("pwc");//pwc added successfully.
console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","wipro","pwc"]}

accountant1.removeClient("wipro");//wipro removed successfully.
console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","pwc"]}


```

<!--
### Points to note for the Developer factory function :

<img src="https://i.imgur.com/invWC5d.png"></img>

- Define a factory function `Developer`, that inherits from _Employee_ and takes four parameters.

  1. name: string
  2. age: number
  3. salary: number
  4. techStack: Array of string

- The factory function should create a new Developer object with the given properties name, age, salary, and techStack.
- Define a method for the Receptionist called **_` getDetails`_** that **_`returns`_** a string with the `name`, `age`, `salary`, and `techStack` of the developer.

- console.log(developer.getDetails())
  - return : `Hi I am {name} and I am {age} years old and my salary is {salary} and I am a developer.`
- **_`addSkill`_** method will add the given skill to the techStack array and returns a string stating `{skill} added successfully.`
- **_`removeSkill`_** method will remove the given skill from the techStack array and return a string stating `{skill} removed successfully.`

#### Example usage for Developer factory function

```
let developer1 =Developer("Rahul", 25, 1000000, "["js","java","react"]);
console.log(developer1)//{name:"Rahul",age:25,salary:1000000,techStack:["js","java","react"]}

console.log(receptionist.getDetails()); // "Hi I am Rahul and I am 25 years old and my salary is 1000000 and I am a developer."

developer1.addSkill("node")//node added successfully.
console.log(developer1);//{name:"Rahul",age:25,salary:1000000,techStack:["js","java","react","node"]}

developer1.removeSkill("java")//java removed successfully.
console.log(developer1);//{name:"Rahul",age:25,salary:1000000,techStack:["js","react","node"]}

``` -->

### Points to note for SeniorManager factory function :

<img src="https://i.imgur.com/4rQLmeD.png"></img>

- Define a factory fuction `SeniorManager`, that inherits from _Manager_ and takes four parameters.

  1. name: string
  2. age: number
  3. salary: number
  4. team: string(`accountant`/`developer`)
  5. yearsInPosition: Number

- The factory fuction should create a new SeniorManager object with the given properties name, age, salary, team and yearsInPosition.
- Define a method for the Manager called **_` getDetails`_** that **_`returns`_** a string with the `name`, `age` and `salary`,of the SeniorManager.

- console.log(seniorManager.getDetails())
  - return : `Hi I am {name} and I am {age} years old and my salary is {salary} and I am a senior manager.`
- **_`displayYearsInPosition`_** that returns a string with `name` and `team` of the manager.
  - return: `{name} has been in the position of senior manager for {yearsInPosition} years.`

#### Example usage for SeniorManager factory function

```
let seniorManager1 = SeniorManager("Virat", 50, 5000000, "developer",15);

console.log(seniorManager1.getDetails()); //`Hi I am Virat and I am 50 years old and my salary is 5000000 and I am a senior manager.

console.log(seniorManager1.displayYearsInPosition())//"Virat has been in the position of Managing Director for 15 years."
```

<!-- ### Points to note for SeniorDeveloper factory function :

<img src="https://i.imgur.com/tFBpYib.png"></img>

- Define a factory fuction `SeniorDeveloper`, that inherits from _Developer_ and takes four parameters.

  1. name: string
  2. age: number
  3. salary: number
  4. techStack: Array of string
  5. projectsCompleted: Number

- The factory fuction should create a new SeniorDeveloper object with the given properties name, age, salary, techStack and projectsCompleted.
- Define a method for the SeniorDeveloper called **_` getDetails`_** that **_`returns`_** a string with the `name`, `age`, `salary` and `projectsCompleted`,of the SeniorDeveloper.

- console.log(seniorDeveloper.getDetails())
  - return : `Hi I am {name} and I am {age} years old and I have worked in {projectsCompleted} projects.`
- **_`mentorJuniorDevelopers`_** that returns a string with `name` and `team` of the manager.
  - return:`{name} is mentoring junior developers in the team.`
- **_`updateProject`_** method will change the projectsCompleted count by given value and return the updated value.

#### Example usage for SeniorDeveloper factory function

```
let seniorDeveloper1 = SeniorDeveloper("Kapil",25,2400000,["c++","java","python"],35);

console.log(seniorDeveloper1)//{name:"Kapil",age:25,salary:2400000,techStack:["c++","java","python"],projectsCompleted:35}

seniorDeveloper1.updateProject(40)// 40
console.log(seniorDeveloper1)//{name:"Kapil",age:25,salary:2400000,techStack:["c++","java","python"],projectsCompleted:40}
``` -->

## **Problem 2**

<h3>Now complete the the above inheritance model using constructor function</h3>

#### Example usage for the Person constructor function

- Should have property name and age
- `getDetails` should return `{name} is {age} years old.`
- `increaseaaaAge`

```
let person = new Person ("Priya",28)
console.log(person)//{name:"Priya",age:28}
console.log(person.getDetails())//Priya is 28 years old.
console.log(person.increaseAge()) //29
console.log(person)//{name:"Priya",age:29};
console.log(person.decreaseAge()) //28
console.log(person)//{name:"Priya",age:28};
```

#### Example usage for Employee constructor function

```
let employee1 = new  Employee("Ram", 45, 150000);

console.log(employee1)//{name:"Ram",age:45,salary:150000}

console.log(employee1.getDetails()); // "Hi I am Ram and I am 45 years old and my salary is 150000."

console.log(employee1.increaseAge())//46
console.log(employee1.decreaseAge())//45
console.log(employee1.decreaseAge())//44

console.log(employee1.increaseSalary(50000))//200000;
console.log(employee1)//{name:"Ram",age:45,salary:200000}

console.log(employee1.decreaseSalary(30000))//170000;
console.log(employee1)//{name:"Ram",age:45,salary:170000}

```

#### Example usage for Manager constructor function

```
let manager1 = new Manager("Virat", 30, 50000, "developer");

console.log(manager1.getDetails()); //"Hi I am Virat and I am 30 years old and my salary is 50000 and I am a manager."

console.log(manager1.manageTeam())//"I am Virat and I manage developer team."
```

#### Example usage for Accountant constructor function

```
let accountant1 = new Accountant("Ankur",27,500000,["tcs","wipro"]);
console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","wipro"]}

accountant1.getDetails()//Hi I am Ankur and I am 27 years old and my salary is 500000 and I am an accountant.

accountant1.addClient("pwc");//pwc added successfully.
console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","wipro","pwc"]}

accountant1.removeClient("wipro");//wipro removed successfully.
console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","pwc"]}


```

<!--
#### Example usage for Developer constructor function

```
let developer1 = newDeveloper("Rahul", 25, 1000000, "["js","java","react"]);
console.log(developer1)//{name:"Rahul",age:25,salary:1000000,techStack:["js","java","react"]}

console.log(receptionist.getDetails()); // "Hi I am Rahul and I am 25 years old and my salary is 1000000 and I am a developer."

developer1.addSkill("node")//node added successfully.
console.log(developer1);//{name:"Rahul",age:25,salary:1000000,techStack:["js","java","react","node"]}

developer1.removeSkill("java")//java removed successfully.
console.log(developer1);//{name:"Rahul",age:25,salary:1000000,techStack:["js","react","node"]}

``` -->

#### Example usage for SeniorManager constructor function

```
let seniorManager1 = new SeniorManager("Virat", 50, 5000000, "developer",15);

console.log(seniorManager1.getDetails()); //`Hi I am Virat and I am 50 years old and my salary is 5000000 and I am a senior manager.

console.log(seniorManager1.displayYearsInPosition())//"Virat has been in the position of Managing Director for 15 years."
```

<!-- #### Example usage for SeniorDeveloper constructor function

```
let seniorDeveloper1 = new SeniorDeveloper("Kapil",25,2400000,["c++","java","python"],35);

console.log(seniorDeveloper1)//{name:"Kapil",age:25,salary:2400000,techStack:["c++","java","python"],projectsCompleted:35}

seniorDeveloper1.updateProject(40)// 40
console.log(seniorDeveloper1)//{name:"Kapil",age:25,salary:2400000,techStack:["c++","java","python"],projectsCompleted:40}
``` -->

## **Problem 3**

<h3>Now complete the the same inheritance model using ES6 class</h3>

##### Person class

```
let person =new Person ("Priya",28)
console.log(person)//{name:"Priya",age:28}
console.log(person.getDetails())//Priya is 28 years old.
console.log(person.increaseAge()) //29
console.log(person)//{name:"Priya",age:29};
console.log(person.decreaseAge()) //28
console.log(person)//{name:"Priya",age:28};

```

##### Employee class

```
  let employee1 = new Employee("Ram", 45, 150000);
  console.log(employee1)//{name:"Ram",age:45,salary:150000}
  console.log(employee1.getDetails()); // "Hi I am Ram and I am 45 years old and my salary is 150000."
  console.log(employee1.increaseSalary())//4600
  console.log(employee1.decreaseSalary())//4500
  console.log(employee1.decreaseSalary())//440000
  - If the value is negetive interger then throw an error : `value has to be positive integer and greater than zero.`

  - If the value is greater than the salary then throw an error : "The value has to be less than or eqaul to the current salary."
  console.log(employee1.increaseSalary(50000))//200000;

   - If the value is not a number or less than zero then throw an error:
    "value has to be positive integer and greater than zero."

  console.log(employee1)//{name:"Ram",age:45,salary:200000}
  console.log(employee1.decreaseSalary(30000))//170000;
  console.log(employee1)//{name:"Ram",age:45,salary:170000}


```

##### Manager

```
 let manager1 = new Manager("Virat", 30, 50000, "developer");
console.log(manager1.getDetails()); //"Hi I am Virat and I am 30 years old and my salary is 50000 and I am a manager."
console.log(manager1.manageTeam())//"I am Virat and I manage developer team."

```

##### Accountant

```
let accountant1 = new Accountant("Ankur",27,500000,["tcs","wipro"]);
console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","wipro"]}

accountant1.getDetails()//Hi I am Ankur and I am 27 years old and my salary is 500000 and I am an accountant.

accountant1.addClient("pwc");//pwc added successfully.
console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","wipro","pwc"]}

- Should throw an error if the client is empty or client type is not a string.
then throw an error "skill has to be non-empty string."

accountant1.removeClient("wipro");//wipro removed successfully.
console.log(accountant1)//{name:"Ankur",age:27,salary:500000,clients:["tcs","pwc"]}
 - should throw an error if the remove client type is not a string or client is an empty string "client has to be non-empty string."

```

#### SeniorManager

 - SeniorManager should be extended of Manager prototype

```
const seniorManager = new SeniorManager(
      "Charlie",
      50,
      140000,
      "Marketing",
      10
    );

console.log(seniorManager.name) // Charlie
console.log(seniorManager.age) // 50
console.log(seniorManager.salary) // 140000
console.log(seniorManager.mareting) // Marketing
console.log(seniorManager.yearsInPosition) // 10

console.log(seniorManager.geDetails()) // Hi I am Charlie and I am 50 years old and my salary is 140000 and I am a senior manager.

console.log(seniorManager.displayYearsInPosition) // Charlie has been in the position of senior manager for10 years.


```

## **Problem 4**

You are tasked with implementing a class called **_`Product`_** to manage product details in an e-commerce application. The Product class will have private properties for the name, price, and discount of a product. Additionally, it will include methods to get and set the product's price, calculate the discounted price based on a discount percentage, and provide a static method for calculating discounted prices.

#### Instructions:

##### Class Structure:

Create a class named **`Product`** with the following properties:

- **name**: The name of the product.
- **price**: The price of the product.
- **discount**: The discount percentage applicable to the product.
- **price** and **discount** is private properties

#### Constructor Method:

##### Getter and Setter Methods:

- Implement a getter method **getPrice()** within the Product class to retrieve the price of the product.
- Implement a setter method **setPrice(newPrice)** within the Product class to update the price of the product.
- the value has to be positive number only otherwise through error saying **`"price has to be positive number only"`**
  - Hint: `throw new Error("price has to be positive number only");`
- Ensure that the setter method validates the new price and updates the **#price** property only if the new price is greater than 0.

##### Discount Calculation:

Implement a method **getDiscountedPrice** to calculate and return the discounted price of the product based on the discount percentage.

##### Static Method for Total Discount Calculation:

Implement a static method **calculateTotalDiscount** that takes a Product object as an argument and calculates the total discount amount for that product.

##### Handling Edge Cases:

##### Ensure that your implementation handles the following edge cases:

- The new price provided to the setPrice(newPrice) method is less than or equal to 0.
- The discount percentage applied to the product is greater than 100.
- The static method calculateDiscountedPrice(originalPrice, discountPercentage) is called with invalid arguments (e.g., negative values).

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time.

```
// Create a new product instance
const product1 = new Product("Laptop", 1000, 10);

// Get the initial price of the product
console.log("Initial Price:", product1.getPrice); // Output: 1000

// Update the price of the product
product1.setPrice = 1200;
console.log("Updated Price:", product1.getPrice); // Output: 1200

// Get the discount percentage of the product
console.log("Discount Percentage:", product1.discount); // Output: 10

// Calculate and get the discounted price of the product
console.log("Discounted Price:", product1.getDiscountedPrice()); // Output: 1080 (10% discount applied)

// Calculate the total discount amount for the product
console.log("Total Discount:", Product.calculateTotalDiscount(product1)); // Output: 120 (10% of 1200)
```
