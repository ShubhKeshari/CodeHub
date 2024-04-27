import {
  Box,
  Drawer,
  DrawerContent,
  Flex,
  Grid,
  GridItem,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { SidebarContentAdmin } from "../Components/SidebarContentAdmin";
import { MobileNavAdmin } from "../Components/MobileNavAdmin";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import {
  getKidData,
  getMenData,
  getUserData,
  getWomenData,
} from "../Redux/adminDataReducer/reducer";
import { FiTruck, FiPackage } from "react-icons/fi";

import {
  FaChildDress,
  FaUsers,
  FaPerson,
  FaPersonDress,
} from "react-icons/fa6";

interface AdminDashboardProps {}

const AdminDashboard: React.FC<AdminDashboardProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //Fetch store
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const menUrl = `https://mock-server-app-1.onrender.com/mens`;
    dispatch(getMenData(menUrl));
    const womenUrl = `https://mock-server-app-1.onrender.com/womens`;
    dispatch(getWomenData(womenUrl));
    const kidsUrl = `https://mock-server-app-1.onrender.com/kids`;
    dispatch(getKidData(kidsUrl));
    const userUrl = `https://mock-server-app-1.onrender.com/users`;
    dispatch(getUserData(userUrl));
  }, []);

  const {
    isLoading,
    isError,
    mensProducts,
    womenProducts,
    kidsProducts,
    users,
  } = useSelector((store: RootState) => store.Products);

  useEffect(() => {
    console.log(mensProducts);
  }, [mensProducts]);

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
        <center>
          <Text fontSize="4xl" fontWeight="bold">
            Dashboard
          </Text>
        </center>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          m="16px 25px 16px 25px"
        >
          <GridItem colSpan={1}>
            <Flex
              p={4}
              borderWidth="1px"
              borderRadius="md"
              bgColor={useColorModeValue("white", "black")}
            >
              <Flex alignItems="center" justifyContent="center">
                <FaUsers size="32px" />
              </Flex>

              <Box ml="24px" fontSize="lg" fontWeight="bold">
                {!isLoading && !isError && <Text>{users.length}</Text>}
                <Text
                  mt="10px"
                  color={useColorModeValue("gray.500", "white")}
                >
                  Total Users{" "}
                </Text>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex
              p={4}
              borderWidth="1px"
              borderRadius="md"
              bgColor={useColorModeValue("white", "black")}
            >
              <Flex alignItems="center" justifyContent="center">
                <FaPerson size="32px" />
              </Flex>

              <Box ml="24px" fontSize="lg" fontWeight="bold">
                {!isLoading && !isError && <Text>{mensProducts.length}</Text>}
                <Text mt="10px" color={useColorModeValue("gray.500", "white")}>Total Men Products </Text>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex
              p={4}
              borderWidth="1px"
              borderRadius="md"
              bgColor={useColorModeValue("white", "black")}
            >
              <Flex alignItems="center" justifyContent="center">
                <FaPersonDress size="32px" />
              </Flex>

              <Box ml="24px" fontSize="lg" fontWeight="bold">
                {!isLoading && !isError && <Text>{womenProducts.length}</Text>}
                <Text mt="10px" color={useColorModeValue("gray.500", "white")}>Total Women Products </Text>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex
              p={4}
              borderWidth="1px"
              borderRadius="md"
              bgColor={useColorModeValue("white", "black")}
            >
              <Flex alignItems="center" justifyContent="center">
                <FaChildDress size="32px" />
              </Flex>

              <Box ml="24px" fontSize="lg" fontWeight="bold">
                {!isLoading && !isError && <Text>{kidsProducts.length}</Text>}
                <Text mt="10px" color={useColorModeValue("gray.500", "white")}>Total Kids Products </Text>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex
              p={4}
              borderWidth="1px"
              borderRadius="md"
              bgColor={useColorModeValue("white", "black")}
            >
              <Flex alignItems="center" justifyContent="center">
                <FiTruck size="32px" />
              </Flex>

              <Box ml="24px" fontSize="lg" fontWeight="bold">
                {!isLoading && !isError && <Text>24,305</Text>}
                <Text mt="10px" color={useColorModeValue("gray.500", "white")}>Total Orders </Text>
              </Box>
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex
              p={4}
              borderWidth="1px"
              borderRadius="md"
              bgColor={useColorModeValue("white", "black")}
            >
              <Flex alignItems="center" justifyContent="center">
                <FiPackage size="32px" />
              </Flex>

              <Box ml="24px" fontSize="lg" fontWeight="bold">
                {!isLoading && !isError && <Text>87,056</Text>}
                <Text mt="10px"color={useColorModeValue("gray.500", "white")}>Product Sell </Text>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
