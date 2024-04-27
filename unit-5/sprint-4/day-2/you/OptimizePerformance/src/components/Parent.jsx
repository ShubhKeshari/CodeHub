import { useState } from "react";
import { MemoizedChild } from "./Child";
import { useCallback } from "react";

export function Parent() {
    let [salary, setSalary] = useState(50000);
    let [age, setAge] = useState(20);
  
    // let handleSalaryIncrement = () => {
    //   setSalary(salary + 10000);
    // };
    let handleSalaryIncrement = useCallback(() => {
        setSalary(salary + 10000);
      },[salary]);
  
    let handleAgeIncrement = () => {
      setAge(age + 1);
    };
  
    return (
      <div className="parent">
        <h2>Parent</h2>
        <div>
          salary: {salary} <button onClick={handleSalaryIncrement}>+</button>
        </div>
        <div>
          age: {age} <button onClick={handleAgeIncrement}>+</button>
        </div>
        <MemoizedChild salary={salary} handleSalaryIncrement={handleSalaryIncrement} />
      </div>
    );
  }