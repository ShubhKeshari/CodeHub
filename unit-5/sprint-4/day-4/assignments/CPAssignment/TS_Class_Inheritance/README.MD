# TS Class based inheritance:-

## Submission Instructions [Please note]

## Maximum Marks - 6

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ If Everything works fine with correct params - 1 mark
 ✅ Wrong class params doesn't work-1 - 1 mark
 ✅ Wrong class params doesn't work-2 - 1 marks
 ✅ Wrong Animal interface - 1 marks.
 ✅ Wrong Cow interface - 1 marks.

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description:-

- Inside `src` there 5 `.ts` files.
- Inside `IAnimal.ts` file you have an interface with name `IAnimal`. The interface should have the following properties:-

```
  noOfLegs (typeof -> number)
  type: (typeof "Herbivores" or "Carnivorous")
  gender: (typeof "Male" or "Female");
  hasHorn: (typeof boolean);
  age: (typeof number);
```

- There is also a file named `ICow.ts`. There you wil find an interface with name:- `ICow`. This interface will have the following properties:-

```
All the properties of IAnimal and
    givesMilk: (typeof -> boolean);
    hasOwner: (typeof -> boolean);
```

- To achieve the cow interface use inheritance in interfaces.

- There are also 2 files:- `Cow.ts` and `Animal.ts`. Inside of them there is a class named `Cow` and `Animal` respectively.

- Cow class will use the ICow interface and Animal will use IAnimal interface.

- Here also Cow class should inherit the Animal class.

- Cow class will take an Object as parameter which should have the following keys:-

```
gender,
age,
givesMilk,
hasOwner,
```

- The other Properties of Animal will have a hardcoded value, like:-

```
noOfLegs -> 4,
type -> "Herbivores",
hasHorn -> true
```

## Boilerplate:-

- Do not change the given folder structure
- inside src folder you will code.ts file that is where you need to write the code.
- In src will be a file index.ts. Please make sure this file should be always empty
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
