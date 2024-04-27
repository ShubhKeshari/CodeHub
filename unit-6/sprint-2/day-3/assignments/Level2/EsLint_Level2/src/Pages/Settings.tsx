import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { SidebarContentAdmin } from "../Components/SidebarContentAdmin";
import { MobileNavAdmin } from "../Components/MobileNavAdmin";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const Settings: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContentAdmin
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContentAdmin onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}

      <MobileNavAdmin onOpen={onOpen} pos="sticky" top="0px" />

      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}

        <Flex justifyContent={"center"} alignItems={"center"}>
          <VStack >
            <Heading fontSize={"30px"}>
              The page is under maintenance. Please visit later!
            </Heading>

            <NavLink to={"/adminDashboard"}>
              <Button
                colorScheme="gray"
                mt="16px"
                _hover={{
                  bg: "gray.300",
                  color: "black",
                }}
              >
                <ArrowBackIcon /> Go back to Dashboard{" "}
              </Button>
            </NavLink>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Settings;
