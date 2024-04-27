import {
  Box,
  Drawer,
  DrawerContent,
  Select,
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
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SidebarContentAdmin } from "../Components/SidebarContentAdmin";
import { MobileNavAdmin } from "../Components/MobileNavAdmin";
import axios from "axios";
import ProductDrawer from "../Components/AdminProductDrawer";

interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  size: string[];
  color: string[];
  imageURL: string;
  description: string;
  stock: number;
  rating: number;
}

const AdminProducts: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedValue, setSelectedValue] = useState<string>("Men");
  const { colorMode,} = useColorMode();
  const [showEditComponent, setShowEditComponent] = useState<boolean>(false);

  const handleEditClick = () => {
    setShowEditComponent(true);
  };

  const fetchData = async (url: string, page: number, limit: number) => {
    try {
      let res = await axios.get(`${url}?_page=${page}&_limit=${limit}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

 
  let menUrl = `https://mock-server-app-1.onrender.com/mens`;
  let womenUrl = `https://mock-server-app-1.onrender.com/womens`;
  let kidUrl = `https://mock-server-app-1.onrender.com/kids`;

  const handleData = (selectedValue: string, page: number) => {
    setSelectedValue(selectedValue);
    if (selectedValue === "Women") {
      fetchData(womenUrl, page, 5);
    } else if (selectedValue === "Kid") {
      fetchData(kidUrl, page, 5);
    } else {
      fetchData(menUrl, page, 5);
    }
  };

  const deleteData = async(url: string,id:number)=>{
    try{
      let res = await axios.delete(`${url}/${id}`);
      console.log(res.data);
      if (selectedValue === "Women") {
        fetchData(womenUrl, currentPage, 5);
      } else if (selectedValue === "Kid") {
        fetchData(kidUrl, currentPage, 5);
      } else {
        fetchData(menUrl, currentPage, 5);
      }
    }catch (error) {
      console.log(error);
    }
  };
  const handleDelete=(id:number)=>{
    if (selectedValue === "Women") {
      deleteData(womenUrl,id);
    } else if (selectedValue === "Kid") {
      deleteData(kidUrl, id);
    } else {
      deleteData(menUrl,id);
    }
  }
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setCurrentPage(1); // Reset page number when changing category
    handleData(selectedValue, 1); // Fetch data for the selected category and page 1
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    handleData(selectedValue, currentPage + 1); // Fetch data for the next page
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Decrease currentPage by 1, ensuring it doesn't go below 1
    const newPage = Math.max(currentPage - 1, 1); // Calculate the new page number
    handleData(selectedValue, newPage); // Fetch data for the previous page
  };

  useEffect(() => {
    // Fetch data when component mounts
    handleData(selectedValue, 1); // Fetch data initially for the selected category and page 1
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
        <Select
          defaultValue="Men"
          placeholder="Men's Products"
          width="25%"
          onChange={handleChange}
          mt="24px"
          ml="24px"
          backgroundColor={useColorModeValue("white", "gray.900")}
          focusBorderColor={colorMode === "light" ? "gray.700" : "white"}
        >
          <option value="Women">Women's Products</option>
          <option value="Kid">Kid's Products</option>
        </Select>
        <TableContainer
          m="24px 24px 24px 24px"
          backgroundColor={useColorModeValue("white", "gray.900")}
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>name</Th>
                <Th>category</Th>
                <Th>price</Th>
                <Th>stock</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.category}</Td>
                    <Td>{item.price}</Td>
                    <Td>{item.stock}</Td>
                    <Td>
                      <Button
                        size="sm"
                        color="white"
                        backgroundColor="black"
                        _hover={{
                          bg: "gray.300",
                          color: "black",
                        }}
                        onClick={handleEditClick}
                       
                      >
                        Edit
                      </Button>
                      {showEditComponent&&<ProductDrawer/>}
                    </Td>
                    <Td>
                      <Button
                        size="sm"
                        color="white"
                        backgroundColor="red.600"
                        _hover={{
                          bg: "gray.300",
                          color: "black",
                        }}
                        onClick={()=>{handleDelete(item.id)}}
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
