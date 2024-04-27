import React, { useState,useEffect } from 'react'

import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { useDispatch, useSelector } from 'react-redux';
import { fetchdataAction, fetchdataFailureAction, fetchdataSuccessAction } from './redux/action';
import { Box, Center, Heading } from '@chakra-ui/react';

function App() {
 
 const dispatch = useDispatch();
 const {isLoading,isError,products} = useSelector((state)=>state);

 useEffect(() => {
  const fetchData = async()=>{
    dispatch(fetchdataAction());
    try{
      const res = await axios.get("http://localhost:8080/products");
      const data = await res.data.data;
      console.log(data);
      dispatch(fetchdataSuccessAction(data));
    }catch(err){
      dispatch(fetchdataFailureAction(err));
    }
  };

 fetchData();
 }, [dispatch]);

  return (
  <>
    <Center bg="lightgreen" h ="20vh">
      <Heading>Products</Heading>
    </Center>
    <Box>
      {isLoading ?(<Heading>Loading...</Heading>):isError?(<Heading>
        Failed to fetch data...
      </Heading>):!products||products.length===0?(
        <Heading>No data available</Heading>
      ):(
        <Box>
          {products.map((ele)=>{
            return <AllRoutes key={ele.id} product={ele}/>
          })}
        </Box>
      )}
    </Box>
   
  </>
  );
}

export default App;
