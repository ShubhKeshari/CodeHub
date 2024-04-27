import { Box, Button } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function ProductListPage() {
  
  return (
    <Box>
      {Products.map(product => (
        <ProductCard key = {product.id} product={product}/>
      ))}
      <Button>Add Product</Button>
    </Box>
  )
}

export default ProductListPage