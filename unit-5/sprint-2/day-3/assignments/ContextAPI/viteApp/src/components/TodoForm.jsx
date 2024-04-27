import { useContext, useState } from "react"
import { TodoContext } from "../context/ToDoContext";

export const TodoForm = ()=>{
    const [todo,setTodo] = useState({title:"",description:"",status:false,id:Date.now()});
    const {handleData} = useContext(TodoContext);
    const handleChange = (e)=>{
        let inp = e.target;
        let name = inp.name;
        let value = inp.type==="checkbox"?inp.checked:inp.value;
        setTodo({...todo,[name]:value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(todo);
        handleData(todo);
        setTodo({title:"",description:"",status:false})

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={todo.title} placeholder="Enter Title" onChange={handleChange}/>
            <br />
            <input type="text" name="description" value={todo.description} placeholder="Enter Discription" onChange={handleChange}/>
            <br />
            <label>
            <input type="checkbox" name="status" checked={todo.status} onChange={handleChange}/> Select Status
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}