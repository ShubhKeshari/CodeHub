import { useState } from "react";

import "./App.css";
import useForm from "./hooks/useForm";
// What are rules of using hooks?
// When and how to create a custom hook?
function App() {
  // const [formData,setFormData] = useState({userName: "", password: ""});
  // const handleChange= (e)=>{
  //   const {name, value} = e.target;
  //   setFormData({...formData, [name]:value});
  // };
  // const handleSubmit= (e)=>{
  //   e.preventDefault();
  //   console.log(formData);
  // };
  const {formData,handleChange,handleSubmit} = useForm();
  return (
    <form type="submit">
      <input type="text" name="userName" value={formData.userName} placeholder="userName"onChange={handleChange}/>
      <input type="password" name="password" value={formData.password} placeholder="password" onChange={handleChange}/>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default App;
