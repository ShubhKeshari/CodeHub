import React, { useState } from "react";

// Define interface for form data
interface FormData{
    Email: string;
    name: string;
    Phone:number
}

const UserDataForm = () => {
  // Initialize form state with empty values
  const [UserData, setUserData] = useState<FormData>({Email:"",name:"",Phone:0});

  // Function to handle input changes and update form state
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // Write the logic
    setUserData((prev) => ({
      ...prev,
      [name]: name === "phoneNumber" ? +value : value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with data:");
   console.log(UserData.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleInputChange}/>
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleInputChange}/>
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="number" id="phoneNumber" name="phoneNumber" onChange={handleInputChange}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserDataForm;