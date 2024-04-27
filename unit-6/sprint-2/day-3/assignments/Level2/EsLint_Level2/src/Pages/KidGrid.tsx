import React, { useState } from 'react';
import { SimpleGrid, Button, Flex, Box } from '@chakra-ui/react';
import KidCard from './KidCard';

interface Product {
  id: number;
  name: string;
  price: number;
  imageURL: string;
  description: string;
  stock: number;
  rating: number;
}

interface Props {
  products: Product[];
}

const KidGrid: React.FC<Props> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Box h={'100%'} marginBottom={'20px'}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing="30px">
        {currentProducts.map((product) => (
          <KidCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
      <Flex justifyContent="space-between" mt={4}>
        <Button
          color="black"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          color="black"
          onClick={nextPage}
          disabled={indexOfLastProduct >= products.length}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default KidGrid;
