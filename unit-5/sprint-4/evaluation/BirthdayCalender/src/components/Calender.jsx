import React, { useEffect } from "react";
import "../style/Calender.css";
function Calender() {

  const getData = async()=>{
    try{
        const response = await fetch("http://localhost:8080/user");
        const data = await response.json();
        console.log("Hi");
        return data;
    }catch(error){
        console.log(error);
    }
  }
  
  useEffect(() => {
   getData();
   
  }, []);
  return (
    <>
      <div className="calender-box">
        <div>
          <h3>Mon</h3>
        </div>
        <div>
          <h3>Tue</h3>
        </div>
        <div>
          <h3>Wed</h3>
        </div>
        <div>
          <h3>Thu</h3>
        </div>
        <div>
          <h3>Fri</h3>
        </div>
        <div>
          <h3>Sat</h3>
        </div>
        <div>
          <h3>Sun</h3>
        </div>
      </div>
    </>
  );
}

export default Calender;
