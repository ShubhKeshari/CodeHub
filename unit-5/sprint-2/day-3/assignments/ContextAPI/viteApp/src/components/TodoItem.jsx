import { useContext, useState } from "react"
import { TodoList } from "./TodoList"
import { TodoContext } from "../context/ToDoContext"



export const TodoItem = ()=>{  
    const {TodoData} = useContext(TodoContext)
    return (
        <ul>
            {
                TodoData.map((ele)=>{
                    return <TodoList ele={ele} />
                })
            }
        </ul>
    )

}