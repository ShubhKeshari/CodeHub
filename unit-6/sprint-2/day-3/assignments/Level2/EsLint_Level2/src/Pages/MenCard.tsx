import React, { useState } from 'react';
import { Box, Image, Text, IconButton, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  imageURL: string;
  description: string;
  stock: number;
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, imageURL, description, stock, rating } = product;
  const [cartClicked, setCartClicked] = useState(false);
  const [wishlistClicked, setWishlistClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleAddToCart = async () => {
    try {
      await axios.post('https://mock-server-app-1.onrender.com/cart', {
        product: { name, price, imageURL, description, stock, rating }
      });
      setCartClicked(true);
      setShowModal(true);
      setModalText('Item added to cart successfully.🎉');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleAddToWishlist = async () => {
    try {
      await axios.post('https://mock-server-app-1.onrender.com/wishlist', {
        product: { name, price, imageURL, description, stock, rating }
      });
      setWishlistClicked(true);
      setShowModal(true);
      setModalText('Item added to wishlist successfully. 🥳');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
      <Link to={`/men/${id}`}>
        <Image src={imageURL} alt={name} />
      </Link>
      <Box p="6" textAlign="center">
        <Link to={`/men/${id}`}>
          <Text mt="1" fontWeight="bold" fontSize="xl" color="teal.800" lineHeight="short">
            {name}
          </Text>
        </Link>
        <Text mt="2" fontSize="lg" color="teal.600">
          ${price}
        </Text>
        <Text mt="2" fontSize="sm">
          Rating: {rating}
        </Text>
        <Flex justify="center" mt="4">
          <IconButton
            aria-label="Add to Wishlist"
            icon={<FaHeart />}
            colorScheme={wishlistClicked ? 'red' : undefined}
            onClick={handleAddToWishlist}
            mr="2"
            size="sm"
            variant="ghost"
          />
          <IconButton
            aria-label="Add to Cart"
            icon={<FaShoppingCart />}
            colorScheme={cartClicked ? 'green' : undefined}
            onClick={handleAddToCart}
            size="sm"
            variant="ghost"
          />
        </Flex>
      </Box>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modalText}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={() => setShowModal(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
