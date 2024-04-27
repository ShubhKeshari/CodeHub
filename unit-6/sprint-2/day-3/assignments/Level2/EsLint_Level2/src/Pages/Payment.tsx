import React from 'react';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Payment: React.FC = () => {
  return (
    <Flex h={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Box>
        <VStack>
          
          <Text textAlign={'center'} fontFamily={'Futura Std'}>This Page is under Construction</Text>
          <NavLink to={'/'}>
            <Button colorScheme='gray'><ArrowBackIcon/> Go back to Homepage </Button>
          </NavLink>
        </VStack>
      </Box>
    </Flex>
  );
}

export default Payment;