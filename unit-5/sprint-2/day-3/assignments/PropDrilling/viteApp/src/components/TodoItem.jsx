import { useState } from "react"
import { TodoList } from "./TodoList"


export const TodoItem = ({TodoData,deleteTodo})=>{  
    return (
        <ul>
            {
                TodoData.map((ele)=>{
                    return <TodoList ele={ele} deleteTodo={deleteTodo}/>
                })
            }
        </ul>
    )

}