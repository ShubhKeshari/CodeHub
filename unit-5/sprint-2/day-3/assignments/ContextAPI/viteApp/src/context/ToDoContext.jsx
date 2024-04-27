import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({children})=>{
    const [TodoData,setTodoData] = useState([]);
    const handleData = (data)=>{
        setTodoData([...TodoData,data]);
    }
    const deleteTodo = (id)=>{
        setTodoData(TodoData.filter(ele=>ele.id!==id));
    }
    return (
        <TodoContext.Provider value={{TodoData,handleData,deleteTodo}}>
           {children}
        </TodoContext.Provider>
    )
}