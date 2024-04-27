import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenData } from '../Redux/ProductsSlice/menSlice';
import ProductsGrid from './MenGrid';
import {ThunkDispatch} from "@reduxjs/toolkit";

import {
  Box,
  Grid,
  Input,
  Select,
  Skeleton,
  SimpleGrid,
} from '@chakra-ui/react';
import FilterSection from '../Components/FilterSection';
import { RootState } from '../Redux/store';
import useDebounce from '../hooks/useDebounce';
const Men: React.FC = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { isLoading, data, isError } = useSelector(
    (state: RootState) => state.menData
  );
  const [sortBy, setSortBy] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500); 

  useEffect(() => {
    dispatch(fetchMenData());
  }, [dispatch]);

  // Function to sort and filter data based on selected option and search query
  const getSortedAndFilteredData = (option: string, query: string) => {
    let sortedAndFilteredData = [...data];
    // Apply sorting
    if (option === 'lowtohigh') {
      sortedAndFilteredData.sort((a, b) => a.price - b.price);
    } else if (option === 'hightolow') {
      sortedAndFilteredData.sort((a, b) => b.price - a.price);
    } else if (option === 'toprated') {
      sortedAndFilteredData.sort((a, b) => b.rating - a.rating);
    }
    // Apply filtering
    sortedAndFilteredData = sortedAndFilteredData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    return sortedAndFilteredData;
  };

  // Handle change event of the sorting select
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  // Handle change event of the search input
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Get sorted and filtered data
  const sortedAndFilteredData = getSortedAndFilteredData(sortBy, debouncedSearchQuery); // Use debounced search query

  if (isLoading) {
    return (
      <div>
        <SimpleGrid marginTop="25px" columns={4} spacing={10}>
          {[...Array(8)].map((_, index) => (
            <Skeleton key={index} height="400px" />
          ))}
        </SimpleGrid>
      </div>
    );
  }

  if (isError) {
    return <div>Error : {isError}</div>;
  }

  return (
    <Grid templateColumns={{ base: '1fr', md: '0.2fr 1fr' }} height="100vh">
      <Box
        position="sticky"
        top="0"
        overflowY="auto"
        maxHeight="100vh"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '2px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
        gridColumn={{ base: '1', md: '1' }}
        gridRow={{ base: '1', md: 'auto' }}
      >
        <Box p="4">
          <FilterSection />
        </Box>
      </Box>
      <Box
        css={{
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '6px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
        gridColumn={{ base: '1', md: '2' }}
        gridRow={{ base: '2', md: 'auto' }}
      >
        {/* Content for the right column */}
        <Grid templateRows="auto 1fr" height="100%">
          <Box p={{ base: '2', md: '4' }} display="flex" alignItems="center">
            <Input
              placeholder="Search..."
              mr="2"
              width={{ base: '60%', md: '80%' }}
              focusBorderColor="grey"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Select
              size="sm"
              width={{ base: '40%', md: '20%' }}
              focusBorderColor="grey"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="">Curated For You</option>
              <option value="toprated">Top Rated</option>
              <option value="lowtohigh">Price(Low to High)</option>
              <option value="hightolow">Price(High to Low)</option>
            </Select>
          </Box>
          <Box p={{ base: '2', md: '4' }}>
            <ProductsGrid products={sortedAndFilteredData} />
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Men;
