import { useContext } from "react"
import { TodoContext } from "../context/ToDoContext"

export const TodoList = ({ele})=>{

    const {deleteTodo} = useContext(TodoContext);

    return (
        <div key={ele.title} style={{backgroundColor:ele.status?"purple":"red"}}>
            <h3>{ele.title}</h3>
            <p>{ele.discription}</p>
            <button onClick={()=>deleteTodo(ele.id)}>Delete</button>
        </div>
    )
}