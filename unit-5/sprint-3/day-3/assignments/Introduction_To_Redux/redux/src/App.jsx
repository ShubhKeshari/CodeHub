import { useState } from 'react';
import { legacy_createStore } from 'redux';
import { ChakraProvider, Box, Button, useColorMode } from '@chakra-ui/react';

const SET_THEME = 'SET_THEME';

function themeReducer(state = 'light', action) {
  switch (action.type) {
    case SET_THEME:
      return action.payload;
    default:
      return state;
  }
}

const store = legacy_createStore(themeReducer);

function App() {
  const [theme, setTheme] = useState(store.getState());
  
  const { colorMode, toggleColorMode } = useColorMode();

  store.subscribe(() => {
    setTheme(store.getState());
  });

  function changeTheme(theme) {
    store.dispatch({ type: SET_THEME, payload: theme });
  }

  return (
    <ChakraProvider>
      <Box>
        <pre className="sidebar left-sidebar" id="userSidebar">
          {JSON.stringify(theme)}
        </pre>
        <Box className="main-content">
          <Box className="theme-switcher">
            <Button
              id="lightModeBtn"
              onClick={() => {
                toggleColorMode();
                changeTheme('light');
              }}
            >
              Light Mode
            </Button>
            <Button
              id="darkModeBtn"
              onClick={() => {
                toggleColorMode();
                changeTheme('dark');
              }}
            >
              Dark Mode
            </Button>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
