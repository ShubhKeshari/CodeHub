import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,

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
  const { isLoading, isError, quizDetails } = useSelector((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchdataAction()); // Dispatching the action creator function
      try {
        const res = await axios.get(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
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
      <Center bg="lightgreen" h="20vh" >
        <Heading>Quizes</Heading>
      </Center>
      <Box>
        {isLoading ? (
          <Heading>Loading...</Heading>
        ) : isError ? (
          <Heading>Failed to Fetch Data...</Heading>
        ) : !quizDetails || quizDetails.length === 0 ? (
          <Heading>No data available</Heading>
        ) : (
          <Box   >
            {quizDetails.map((ele) => {
              return (
                <Box
                  bg="lightgreen"
                  w="100%"
                  p={4}
                 
                  marginTop={2}
                  key={ele.id}
                >
                  <RadioGroup 
                 >
                    <Text  fontWeight= "bold" mb={2}>{ele.question}</Text>
                    <Stack direction="column" >
                      <Radio value="1">{ele.options[0]}</Radio>
                      <Radio value="2">{ele.options[1]}</Radio>
                      <Radio value="3">{ele.options[2]}</Radio>
                      <Radio value="4">{ele.options[3]}</Radio>
                    </Stack>
                   
                  </RadioGroup>
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </>
  );
}

export default App;
