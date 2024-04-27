import "./App.css";

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Box, Image, Text, Button, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";

const MovieCard = ({ movie, onDeleteSuccess, onUpdateSuccess }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedImage, setEditedImage] = useState(movie.image);
  const [editedTitle, setEditedTitle] = useState(movie.title);
  const [editedRating, setEditedRating] = useState(movie.rating);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(movie.title);
    setEditedRating(movie.rating);
  };

  const handleSaveEdit = async () => {
    try {
      const updatedMovie = {
        ...movie,
        title: editedTitle,
        image:editedImage,
        rating: editedRating,
      };
      const response = await axios.patch(
        `http://localhost:4500/movie/${movie._id}`,
        updatedMovie
      );
      onUpdateSuccess();
      if (response.status === 200) {
        console.log(`Movie with ID ${movie._id} updated successfully`);
        setIsEditing(false);
        
      } else {
        console.error(`Failed to update movie with ID ${movie._id}`);
      }
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  const onDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4500/movie/${id}`);
      if (response.status === 200) {
        console.log(`Movie with ID ${id} deleted successfully`);
        onDeleteSuccess(id); // Invoke onDeleteSuccess to update UI
      } else {
        console.error(`Failed to delete movie with ID ${id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onUpdate = (id) => {
    console.log(id);
  };
  return (
    <Box
      maxW="340px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.03)" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="5px"
    >
      <Image w="100%" h="340px" src={movie.image} alt={movie.title} />

      <Box p="4">
        <Text as="h2" fontWeight="bold" fontSize="24px" mb="2">
          {movie.title}
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="5px"
        >
          <Rating rating={movie.rating} />
          <Text>{movie.rating}</Text>
        </Box>

        <Button colorScheme="red" size="sm" onClick={() => onDelete(movie._id)}>
          Delete
        </Button>
        <Button
          ml="10px"
          colorScheme="red"
          size="sm"
          onClick={handleEditClick}
        >
          Edit
        </Button>
      </Box>

      <Modal isOpen={isEditing} onClose={handleCancelEdit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Movie</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
              <FormLabel>Image</FormLabel>
              <Input
                value={editedImage}
                onChange={(e) => setEditedImage(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Rating</FormLabel>
              <Input
                value={editedRating}
                onChange={(e) => setEditedRating(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSaveEdit}>
              Save
            </Button>
            <Button onClick={handleCancelEdit}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

function Rating({ rating }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}
const fetchMovie = async () => {
  try {
    const res = await axios.get("http://localhost:4500/movie");
    console.log(res.data.items);
    return res.data.items.sort((a, b) => b.rating - a.rating);
  } catch (err) {
    console.log(err);
  }
};

function App() {
  const [movies, setMovies] = useState([]);
  const handleDeleteSuccess = (deletedId) => {
    // Update movies state by filtering out the deleted movie
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie._id !== deletedId)
    );
  };
  const handleUpdateSuccess = async() => {
    const updatedMovie = await fetchMovie();
    setMovies((prevMovies) =>updatedMovie);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let movieData = await fetchMovie();
        movieData = movieData.sort((a, b) => b.rating - a.rating); //sorted based on the rating
        setMovies(movieData);
      } catch (error) {
        console.error("Error setting movie data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Text
        as="h2"
        fontSize="3xl"
        fontWeight="bold"
        textAlign="center"
        mb="4"
        color="purple.600"
      >
        Movie List
      </Text>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        p={4}
      >
        {movies.length > 0 ? (
          movies.map((movie) => {
            console.log(movie); // Log each movie object
            return (
              <GridItem key={movie._id}>
                <MovieCard
                  movie={movie}
                  onDeleteSuccess={handleDeleteSuccess}
                  onUpdateSuccess={handleUpdateSuccess}
                />
              </GridItem>
            );
          })
        ) : movies.length == 0 ? (
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            Data is Empty
          </Text>
        ) : (
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            Loading...
          </Text>
        )}
      </Grid>
    </>
  );
}

export default App;
