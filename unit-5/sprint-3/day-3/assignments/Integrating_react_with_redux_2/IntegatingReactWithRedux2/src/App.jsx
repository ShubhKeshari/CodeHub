
import { Box, Center, Flex } from '@chakra-ui/react'
import './App.css'
import TodoForm from './components/TodoForm'
import FootballList from './components/FootballList'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Navbar/>
    <Flex>
      <Box w='50%'>
      <TodoForm  />
      </Box>
      <Center w='50%' >
        <FootballList/>
      </Center>
    </Flex>
    </>
  )
}

export default App
