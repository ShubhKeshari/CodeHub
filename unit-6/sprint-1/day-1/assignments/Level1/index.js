// index.js

//  import the crypto module
const crypto = require('crypto');


//  get a commands using process.argv
const args = process.argv.slice(2);

// complete the  function
const operation = args[0];
const operands1 = parseInt(args[1]);
const operands2 = parseInt(args[2]);

switch (operation) {
  case "add":
    if(!operands1||!operands2){
      console.log("Provide two numbers.");
    }else{
      console.log(operands1 + operands2);
    }
    break;
  case "sub":
    console.log(operands1 - operands2);
    break;
  case "mult":
    console.log(operands1 * operands2);
    break;
  case "divide":
    if(!operands1||!operands2){
      console.log("Provide two numbers.");
    }else if(operands2!==0){
      console.log(operands1 / operands2);
    }else{
      console.log("Cannot divide by 0.");
    }
    break;
  case "sin":
    console.log(Math.sin(operands1));
    break;
  case "cos":
    console.log(Math.cos(operands1));
    break;
  case "tan":
    console.log(Math.tan(operands1));
    break;
  case "random":
    if(operands1){
      console.log(crypto.randomBytes(operands1).toString("binary").slice(0,operands1));
    }else{
      console.log("Provide length for random number generation.");
    }
    
    break;
  default:
    console.log("Invalid operation");
}
