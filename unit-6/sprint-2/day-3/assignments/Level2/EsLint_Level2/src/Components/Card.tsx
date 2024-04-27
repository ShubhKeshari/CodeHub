import "./Card.css";
import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Box,
  Heading,
  Container,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


interface Product {
  name: string;
  price: number;
  imageURL: string;
  description: string;
  stock: number;
  rating: number;
}

interface Item {
  id: number;
  product: Product;
}

const MyComponentB: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const bgColor = useColorModeValue("white", "gray.800");
  const fetchData = async () => {
    const response = await fetch("https://mock-server-app-1.onrender.com/cart");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    fetchData()
      .then((data: Item[]) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteItem = (itemId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  if (isLoading) {
    return (
      <div>
        <CircularProgress isIndeterminate color="green.300" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (items.length === 0) {
    return (
      <div>
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Cart Is Empty <br />
              <Text as={"span"} color={"green.400"}>
                😓😓
              </Text>
            </Heading>
          </Stack>
        </Container>
      </div>
    );
  }

  return (<>
  
  <Container maxW="container.xxxl">
    <Flex width={"100%"} justifyContent={"flex-end"}  alignItems={"flex-end"}><Link to="/productlist"><Button >Proceed to Buy</Button></Link></Flex>

  <Flex gap={4} flexWrap="wrap">
    {items.map(
      (item) =>
        item.product && (
          <Box
            key={item.id}
            p={6}
            w={["100%", "48%", "32%"]}
            bg={bgColor}
            boxShadow={"2xl"}
            rounded={"lg"}
            mb={8}
          >
            <Flex>
              <Box mr={4}>
                <img
                  style={{ borderRadius: "8px" }}
                  height={230}
                  width={282}
                  src={item.product.imageURL}
                  alt={item.product.name}
                />
              </Box>
              <Stack pt={10} align={"start"}>
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                >
                  Brand
                </Text>
                <Heading
                  fontSize={"2xl"}
                  fontFamily={"body"}
                  fontWeight={500}
                >
                  {item.product.name}
                </Heading>
                <Text fontWeight={800} fontSize={"xl"}>
                  ${item.product.price}
                </Text>
                <Text textDecoration={"line-through"} color={"gray.600"}>
                  ${item.product.price}
                </Text>
                <Text fontSize={"sm"}>{item.product.description}</Text>
                <Text fontSize={"sm"}>Stock: {item.product.stock}</Text>
                <Text fontSize={"sm"}>Rating: {item.product.rating}</Text>
                <Button
                  colorScheme="red"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Delete From Cart
                </Button>
              </Stack>
            </Flex>
          </Box>
        )
    )}
  </Flex>
</Container></>
    
  );
};

export default MyComponentB;
