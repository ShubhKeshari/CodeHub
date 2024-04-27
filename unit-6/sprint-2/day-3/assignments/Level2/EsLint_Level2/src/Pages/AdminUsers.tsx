import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SidebarContentAdmin } from "../Components/SidebarContentAdmin";
import { MobileNavAdmin } from "../Components/MobileNavAdmin";
import axios from "axios";

interface UserData {
  id: number;
  name: string;
  email: string;
  type: "admin" | "user"; // Type should be either "admin" or "user"
  image: string;
  password: string;
}

const AdminProducts: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<UserData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchData = async (url: string, page: number, limit: number) => {
    try {
      let res = await axios.get(`${url}?_page=${page}&_limit=${limit}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  let url = `https://mock-server-app-1.onrender.com/users`;

  const handleData = (page: number) => {
    fetchData(url, page, 5);
  };
  const deleteData = async (url: string, id: number) => {
    try {
      let res = await axios.delete(`${url}/${id}`);
      console.log(res.data);
      fetchData(url, currentPage, 5);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = (id: number) => {
    deleteData(url, id);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    handleData(currentPage + 1); // Fetch data for the next page
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Decrease currentPage by 1, ensuring it doesn't go below 1
    const newPage = Math.max(currentPage - 1, 1); // Calculate the new page number
    handleData(newPage); // Fetch data for the previous page
  };

  useEffect(() => {
    // Fetch data when component mounts
    handleData(1); // Fetch data initially for the selected category and page 1
  }, []);

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
        {/* This is product page... */}
        <center>
          <Text fontSize="xl" fontWeight="bold">
            User's Data
          </Text>
        </center>
        <TableContainer
          m="24px 24px 24px 24px"
          backgroundColor={useColorModeValue("white", "gray.900")}
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>name</Th>
                <Th>email</Th>
                <Th>type</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.type}</Td>
                    <Td>
                      <Button
                        size="sm"
                        color="white"
                        backgroundColor="red.600"
                        _hover={{
                          bg: "gray.300",
                          color: "black",
                        }}
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justify="space-between" m="24px 24px 0px 24px">
          <Button
            color="white"
            size="sm"
            backgroundColor="black"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            _hover={{
              bg: "gray.300",
              color: "black",
            }}
          >
            Prev
          </Button>
          <Button
            size="sm"
            color="white"
            backgroundColor="black"
            onClick={handleNextPage}
            _hover={{
              bg: "gray.300",
              color: "black",
            }}
          >
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default AdminProducts;
