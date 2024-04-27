import { Box, Button, Select } from '@chakra-ui/react';
import React, { useState } from 'react'

function Dashboard() {
  // let status = ["PENDING","IN-PROGRESS","COMPLETED"];
  let initState ={
    title:"",
    status:"PENDING"
  };
  const[txt, setTxt] = useState(initState);
  return (
    <Box>
      {/* <Input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <Select>
        <option value="PENDING">PENDING</option>
        <option value="IN-PROGRESS">IN-PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </Select>
      <Button onClick={handleClick} isLoading={isLoading} loadingText={"Please wait..."}></Button> */}
    </Box>
  )
}

export default Dashboard