/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import {
  Button,
  Center,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { errorAction, getTodoAction, loadingAction } from "../redux/action";

const TodoForm = () => {
    const dispatch = useDispatch();
    const {isLoading,isError,todo} = useSelector((state)=>state);

  const init = {
    title: "",
    status: "pending",
  };
  
  const [inputState, setInputState] = useState(init);
  let url = 'http://localhost:8080';


  function handeleChange(e) {
    const { name, value } = e.target;
    setInputState({ ...inputState, [name]: value });
  }
   
  function fetchData(){
    dispatch(loadingAction());
    axios.get(`${url}/todos`)
    .then((res)=>{
        dispatch(getTodoAction(res.data))
    })
    .catch((err)=>{
        console.log(err);
        dispatch(errorAction());
    })
  }
  useEffect(()=>{
    fetchData()
  },[dispatch]);

  function handleSubmit() {
    dispatch(loadingAction())
    axios.post(`${url}/todos`,inputState)
    .then((res)=>{
        console.log(res);
        fetchData();
        setInputState(init);
    })
    .catch((error)=>{
        console.log(error);
        dispatch(errorAction())
    })
  }


  return (
    <>
      <Center w="100%">
        <VStack>
          <Heading>Todo List</Heading>
          <Input
            type="text"
            placeholder="Enter the task here"
            onChange={handeleChange}
            name="title"
          />
          <Select placeholder=" Status" name="status" onChange={handeleChange}>
            <option value="pending">pending</option>
            <option value="in-progress">in-progress</option>
            <option value="completed">completed</option>
          </Select>
          <Button onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </VStack>
      </Center>
      <TodoList todo={todo} isError={isError} isLoading={isLoading}  dispatch={dispatch} url={url} fetchData={fetchData}/>
    </>
  );
};

export default TodoForm;
