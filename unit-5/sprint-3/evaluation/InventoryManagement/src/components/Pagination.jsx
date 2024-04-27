import { Box, Button } from '@chakra-ui/react'
import React from 'react'

function Pagination() {
    const handleNextPage = ()=>{
        console.log("next page");
    }
    const handlePrevPage = ()=>{
        console.log("prev page");
    }
  return (
    <Box>
        <Button onClick={handlePrevPage}>
            Prev
        </Button>
        <Button onClick = {handleNextPage}>
            Next
        </Button>
    </Box>
  )
}

export default Pagination