// import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  footlistFetchAction,
  footlistFetchFailure,
  footlistFetchSuccess,
} from "../redux/footballreducer/action";
import axios from "axios";
import { Box, VStack, Text, Divider, Heading } from "@chakra-ui/react";

const FootballList = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, footballMatches } = useSelector(
    (state) => state.football
  );
  useEffect(() => {
    const fetchData = async () => {
      dispatch(footlistFetchAction());
      try {
        const response = await axios.get(
          "https://jsonmock.hackerrank.com/api/football_matches?page=2"
        );
        const data = await response.data.data;
        console.log(data);
        dispatch(footlistFetchSuccess(data));
      } catch (error) {
        console.log(error);
        dispatch(footlistFetchFailure());
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
        <Heading>Football Matches</Heading>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error in fetching data</p>
      ) : (
        <VStack alignItems="stretch" spacing="4">
          {footballMatches && footballMatches.length > 0 ? (
            footballMatches.map((match, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" p="4">
                <Text fontWeight="bold">Competition: {match.competition}</Text>
                <Text>Year: {match.year}</Text>
                <Text>Round: {match.round}</Text>
                <Divider />
                <Text>Team 1: {match.team1}</Text>
                <Text>Goals: {match.team1goals}</Text>
                <Text>Team 2: {match.team2}</Text>
                <Text>Goals: {match.team2goals}</Text>
              </Box>
            ))
          ) : (
            <p>No football matches found</p>
          )}
        </VStack>
      )}
    </div>
  );
  
  
};

export default FootballList;
