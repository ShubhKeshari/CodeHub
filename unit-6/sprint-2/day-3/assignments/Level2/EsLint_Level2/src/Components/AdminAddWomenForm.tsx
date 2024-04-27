import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  
  Heading,
  useColorModeValue,

  Radio,
} from "@chakra-ui/react";

const AddAdminWomenForm: React.FC = () => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    price: 0,
    size: [] as string[],
    color: [] as string[],
    imageURL: "",
    description: "",
    stock: 0,
    rating: 0,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post(
        "https://mock-server-app-1.onrender.com/womens",
        formData
      );
      alert("Data posted successfully");
      // Reset the form after successful submission
      setFormData({
        category: "",
        name: "",
        price: 0,
        size: [],
        color: [],
        imageURL: "",
        description: "",
        stock: 0,
        rating: 0,
      });
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Error posting data. Please try again later.");
    }
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const resetForm = () => {
    setFormData({
      category: "",
      name: "",
      price: 0,
      size: [],
      color: [],
      imageURL: "",
      description: "",
      stock: 0,
      rating: 0,
    });
  };
  return (
    <Box ml="24px">
      <Heading
        as="h3"
        size="md"
        mt="24px"
        mb="24px"
        color={useColorModeValue("gray.700", "white")}
      >
        Add Women Product Data
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name">
          <FormLabel>Name:</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="category">
          <FormLabel>Category:</FormLabel>
          <Input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="name">
          <FormLabel>Name:</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="price">
          <FormLabel>Price:</FormLabel>
          <Input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </FormControl>
       
        <FormControl>
        <FormLabel>Size:</FormLabel>
          <Radio value="S">S</Radio>
          <Radio value="M">M</Radio>
          <Radio value="L">L</Radio>
          <Radio value="XL">XL</Radio>
          <Radio value="2XL">2XL</Radio>
        </FormControl>
        <FormControl>
        <FormLabel>Color:</FormLabel>
          <Radio value="Red">Red</Radio>
          <Radio value="Black">Black</Radio>
          <Radio value="Blue">Blue</Radio>
          <Radio value="White">White</Radio>
          <Radio value="Gray">Gray</Radio>
        </FormControl>
        
        <FormControl id="imageURL">
          <FormLabel>Image URL:</FormLabel>
          <Input
            type="text"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description:</FormLabel>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="stock">
          <FormLabel>Stock:</FormLabel>
          <Input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          mt={4}
          ml={2}
          size="sm"
          color="white"
          backgroundColor="black"
          _hover={{
            bg: "gray.300",
            color: "black",
          }}
          type="button"
          onClick={resetForm}
        >
          Reset
        </Button>
        <Button
          mt={4}
          ml="24px"
          size="sm"
          color="white"
          backgroundColor="black"
          _hover={{
            bg: "gray.300",
            color: "black",
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddAdminWomenForm;
