/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Image, Text, Button, Flex, Icon, useToast, Heading, Highlight, SkeletonText } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaHeart } from 'react-icons/fa';

const SingleWomen = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState<boolean>(false);
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  const toast = useToast();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://mock-server-app-1.onrender.com/womens/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const addToWishlist = async () => {
    try {
      await axios.post(`https://mock-server-app-1.onrender.com/wishlist`, { productId: id });
      setIsAddedToWishlist(true);
      toast({
        title: 'Added to Wishlist',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const addToCart = async () => {
    try {
      await axios.post(`https://mock-server-app-1.onrender.com/cart`, { productId: id });
      setIsAddedToCart(true);
      toast({
        title: 'Added to Cart',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (!product) {
    return (
      <div>
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonText padding={20} mt="4" noOfLines={4} spacing="4" skeletonHeight="10" />
        </Box>
      </div>
    );
  }

  const { name, price, imageURL, description, stock, rating } = product;

  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <Box
      maxW={{ base: '90%', md: '900px' }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      mx="auto"
      mt="20px"
      mb="40px"
    >
      {/* Large Screen Layout */}
      <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
        <Image src={imageURL} alt={name} maxW="40%" maxH="300px" mr="4" />
        <Box flex="1">
          <Text fontSize="3xl" fontWeight="semibold" color="teal.800" mt="0">
            {name}
          </Text>
          <Text fontSize="xl" color="teal.600">
            ${price}
          </Text>
          <Text fontSize="lg" color="gray.600">
            {description}
          </Text>
          <Flex alignItems="center" color="yellow.500">
            {[...Array(filledStars)].map((_, index) => (
              <Icon key={index} as={StarIcon} boxSize={6} color="yellow.500" />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
              <Icon
                key={index + filledStars}
                as={StarIcon}
                boxSize={6}
                color="gray.300"
              />
            ))}
          </Flex>
          <Text color={stock > 0 ? 'green.600' : 'red.600'}>
            {stock > 0 ? 'In Stock' : 'Out of Stock'}
          </Text>
          {isAddedToCart ? (
            <Button
              mt="4"
              colorScheme="teal"
              size="lg"
              disabled
              onClick={addToCart}
              bgColor="gray.300"
            >
              Added to Cart
            </Button>
          ) : (
            <Button
              mt="4"
              colorScheme="teal"
              size="lg"
              disabled={stock === 0}
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          )}
          <Icon
            as={FaHeart}
            color={isAddedToWishlist ? 'red' : 'gray'}
            boxSize={6}
            ml="2"
            cursor="pointer"
            onClick={addToWishlist}
          />
        </Box>
      </Flex>

      {/* Small Screen Layout */}
      <Box display={{ base: 'block', md: 'none' }}>
        <Flex alignItems="center" flexDirection="column">
          <Image src={imageURL} alt={name} maxW="100%" maxH="300px" mb="4" />
          <Text
            fontSize="3xl"
            fontWeight="semibold"
            color="teal.800"
            textAlign="center"
          >
            {name}
          </Text>
          <Text fontSize="xl" color="teal.600" textAlign="center">
            ${price}
          </Text>
          <Text fontSize="lg" color="gray.600" textAlign="center">
            {description}
          </Text>
          <Flex alignItems="center" color="yellow.500" textAlign="center">
            {[...Array(filledStars)].map((_, index) => (
              <Icon key={index} as={StarIcon} boxSize={6} color="yellow.500" />
            ))}
            {[...Array(emptyStars)].map((_, index) => (
              <Icon
                key={index + filledStars}
                as={StarIcon}
                boxSize={6}
                color="gray.300"
              />
            ))}
          </Flex>
          <Text color={stock > 0 ? 'green.600' : 'red.600'} textAlign="center">
            {stock > 0 ? 'In Stock' : 'Out of Stock'}
          </Text>
          {isAddedToCart ? (
            <Button
              mt="4"
              colorScheme="teal"
              size="lg"
              disabled
              onClick={addToCart}
              bgColor="gray.300"
            >
              Added to Cart
            </Button>
          ) : (
            <Button
              mt="4"
              colorScheme="teal"
              size="lg"
              disabled={stock === 0}
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          )}
          <Icon
            as={FaHeart}
            color={isAddedToWishlist ? 'red' : 'gray'}
            boxSize={6}
            mt="2"
            cursor="pointer"
            onClick={addToWishlist}
          />
        </Flex>
      </Box>

      {/* Additional Heading */}
      <Heading mt={20} textAlign="center" lineHeight="tall">
        <Highlight
          query="LIKE"
          styles={{ px: '1.5', py: '1', rounded: '20px', bg: 'red.100' }}
        >
          YOU MAY ALSO LIKE ❤️
        </Highlight>
      </Heading>
      
    </Box>
  );
};

export default SingleWomen;
