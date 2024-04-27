import {
  Box,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchdataAction,
  fetchdataFailureAction,
  fetchdataSucessAction,
} from "./reducer/action";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  const { isLoading, isError, coffeeDetails } = useSelector((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchdataAction()); // Dispatching the action creator function
      try {
        const res = await axios.get(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee"
        );
        const data = await res.data.data;
        console.log(data);
        dispatch(fetchdataSucessAction(data));
      } catch (error) {
        dispatch(fetchdataFailureAction());
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <Center bg='gray.300' h='20vh' margin='10px'><Heading>Coffees</Heading></Center>
      <Box>
        {isLoading ? (
          <Heading>Loading...</Heading>
        ) : isError ? (
          <Heading>Failed to Fetch Data...</Heading>
        ) : !coffeeDetails || coffeeDetails.length === 0 ? (
          <Heading>No data available</Heading>
        ) : (
          <Box>
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
              {coffeeDetails.map((ele) => (
                <Center key={ele.id}>
                  <GridItem>
                    <Center bg="gray.100" h='60vh' maxWidth='25vw' borderColor='gray.400' borderWidth='1px'>
                      <VStack>
                        <Heading fontSize='4vh'>{ele.title}</Heading>
                        <Divider />
                        <Image src={ele.image}  h='25vh' w='50%' borderRadius='20px'/> 
                        <Text fontSize='10px'>{ele.description} </Text>
                        <VStack>
                          <Text fontSize='10px'>
                            {`Price : $`+ ele.price}
                          </Text>
                          <Text fontSize='10px'>ingredients: {ele.ingredients.join(' & ')}</Text>
                        </VStack>
                      </VStack>
                    </Center>
                  </GridItem>
                </Center>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
}

export default App;
