
import { VStack, Table, Thead, Tbody, Tr, Th, Td, Button, HStack, Text } from "@chakra-ui/react";
import axios from "axios";
import { errorAction } from "../redux/action";

const TodoList = ({ todo, isLoading, dispatch, url, fetchData }) => {
  function handleClick(el) {
    let currStatus = el.status;
    let newStatus = currStatus === 'pending' ? 'in-progress' : currStatus === 'in-progress' ? 'completed' : 'completed';

    axios.patch(url + `/todos/${el.id}`, { status: newStatus })
      .then((res) => {
        console.log(res);
        fetchData();
      }).catch((err) => {
        console.log(err);
        dispatch(errorAction());
      })
  }

  function handleDelete(id) {
    axios.delete(`${url}/todos/${id}`)
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
        dispatch(errorAction());
      });
  }

  return (
    <VStack>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Table variant="striped" colorScheme="green">
          <Thead>
            <Tr>
              <Th>Task</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todo.map((el) => (
              <Tr key={el.id}>
                <Td>{el.title}</Td>
                <Td>{el.status}</Td>
                <Td>
                  <HStack>
                    <Button onClick={() => handleClick(el)}>Update</Button>
                    <Button onClick={() => handleDelete(el.id)}>Delete</Button>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </VStack>
  )
}

export default TodoList;
