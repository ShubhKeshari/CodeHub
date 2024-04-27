import { memo } from "react";
// const customCheck = (prev,curr)=>{
//     return prev.salary === curr.salary; // Don't compare the salary if you are memorising
//     //prev.salary = curr.salary -> re-render
// }
function Child({ salary,handleSalaryIncrement }) {
    console.log("Heavy Child is rendering...");
    return (
      <div className="child">
        <h2>Child</h2>
        <div>salary: {salary}</div>
        <button onClick={handleSalaryIncrement}> Increase Salary</button>
      </div>
    );
  }

 //export  const MemoizedChild = memo(Child, customCheck);//-> for customcheck
 export  const MemoizedChild = memo(Child);

 // useMemo -> memorises function -> previos param;
 // memo -> memorises component -> previous props
 // useCallback -> memorises function -> reference
 // customcheck -> we give a custom brain to memo


//  export const MemoizedChild = memo(function Child({ salary, handleSalaryIncrement}) {//We can't pass the anonymous function here it breaks the rule
//     //We have to pass named functions here
//     console.log("Heavy Child is rendering...");
//     return (
//       <div className="child">
//         <h2>Child</h2>
//         <div>salary: {salary}</div>
//         <button onClick={handleSalaryIncrement}> Increase Salary</button>
//       </div>
//     );
//   });

  // salary ->number -> called by value (1200===1000)//false
  //handleSalaryIncrement -> function-> reference->(wert303===sdfer890)//false

