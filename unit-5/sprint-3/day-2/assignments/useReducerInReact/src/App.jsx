import { useReducer } from "react";
import { Box, Button } from "@chakra-ui/react";
// Define action types
const TOGGLE_THEME = "TOGGLE_THEME";

// Define reducer function
const themeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

// Example theme styles

export default function App() {
  // Initialize state with a default theme
  const [theme, dispatch] = useReducer(themeReducer, "light");

  // Function to toggle between themes
  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };
  const lightTheme = {
    backgroundColor: "#ffffff",
    color: "#000000",
  };

  const darkTheme = {
    backgroundColor: "#333333",
    color: "#ffffff",
  };

  // Apply the current theme
  const themeStyles = theme === "light" ? lightTheme : darkTheme;

  return (
    <Box  w="100%" style={themeStyles} height="100vh" p={4} color="white">
      <Button colorScheme="teal" size="sm" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </Box>
  );
}
