import {useMemo, useState} from "react";
export const ExpensiveOperationComponent = () => {
    const [amount, setAmount] = useState(0);
    const [age, setAge] = useState(0);
  
    const totalPriceInINR = (num) => {
      console.log("Converting to INR...");
      return num * 80;
    };
   // const amountInINR = totalPriceInINR(amount);// Derived State
   const amountInINR = useMemo(()=>totalPriceInINR(amount),[amount]);
   // Memorise the things like (Only latest value memorise)
   //DP in recursion When it calculated for given input it will not calculate again. 
   //In dependency when we change the amount it will calculate.
    return (
      <div>
        <div>
          <button onClick={() => setAmount(amount + 1)}>
            Increment Dollar amount
          </button>
          <button onClick={() => setAmount(amount - 1)}>
            Decrement Dollar amount
          </button>
          <p>Amount in Dollars: {amount}</p>
          <p>Amount in INR: {amountInINR}</p>
        </div>
  
        <hr />
  
        <div>
          <p>Age: {age}</p>
          <button onClick={() => setAge(age + 1)}>Increment Age</button>
        </div>
        {/* When we click on age button it also re renders the amountInDoller child. we can see in the console  */}
      </div>
    );
  };