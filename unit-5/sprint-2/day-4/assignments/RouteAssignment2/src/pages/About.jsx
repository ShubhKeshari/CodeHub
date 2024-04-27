import { useNavigate } from "react-router-dom"

export const About=()=>{
 const navigate =useNavigate();
   const  handleClick=()=>{
      navigate("/");
    }

    return(
        <>
        <h1>About Us</h1>
        <p>for More Details Regarding the Company and Products Contact on 69879****8</p>
        <button onClick={handleClick}>Go to Home Page</button>
        </>
    )
}