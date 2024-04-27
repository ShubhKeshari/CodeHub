import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
const handleEdit = ()=>{
 console.log("Edit");
};
const handleLowInventory=()=>{
    console.log("Low Inventory");
}
function ProductCard({ product }) {
  return (
    <Box>
      <Box>{product.title}</Box>
      <Box>{product.price}</Box>
      <Box>{product.quantity}</Box>
      <Flex>
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={handleLowInventory}>Low Inventory</Button>
      </Flex>
    </Box>
  );
}

export default ProductCard;
