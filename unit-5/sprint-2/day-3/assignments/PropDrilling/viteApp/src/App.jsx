import { useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm'
import { TodoItem } from './components/TodoItem'

function App() {
  const [TodoData,setTodoData] = useState([]);

  const handleData = (obj)=>{
    setTodoData([...TodoData,obj])
    console.log(TodoData)
  }

  const deleteTodo = (id)=>{
    let newData = TodoData.filter((ele)=> ele.id!=id)
    setTodoData(newData)
  }
  return (
    <>
        <TodoForm handleData={handleData}/>
        <TodoItem TodoData={TodoData} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App

