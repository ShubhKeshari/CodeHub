import React, { useState } from 'react'

function useForm() {
    const [formData,setFormData] = useState({userName: "", password: ""});
  const handleChange= (e)=>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  };
  const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(formData);
  };
  return {formData,handleChange,handleSubmit};
}

export default useForm