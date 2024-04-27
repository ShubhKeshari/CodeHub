import { useState } from "react";

    const TodoList = ({todoData, handleDelete, handleToggle})=>{
        return (
            <>
                <p>Todo List</p>
                <ul>
                {
                 todoData.map((item)=>{
                    return (
                        <div key = {item.id}>
                            <p>{item.title}</p>
                            <button onClick={handleDelete(item.id)}>Delete</button>
                            <button onClick={handleToggle(item.id)}>{item.status?"Complete":"Pending"}</button>
                        </div>
                    );
                 })
                }
                </ul>
            </>
        )
    };
    const AddTodo = ({handleTasks})=>{
        const[data, setData] = useState("");
        
        const handleChange = (e)=>{
            setData(prev=>e.target.value);
        };
        const handleSubmit=(e)=>{
            e.preventDefault();
            handleTasks(data);
            setData("");
        };
        return (
            <form onSubmit={handleSubmit}>
                <input type="text" value = {data} onChange={handleChange}/>
                <button type="submit" >AddTodo</button>
            </form>
        );
    };
   export  const TodoApp = () => {
        const [todoData, setTodoData] = useState([]);
        const handleTasks = (data)=>{
            setTodoData([...todoData,{id:Date.now(), title:data, status:false}]);
        };
        const handleDelete = (id)=>{
            return ()=>{
                setTodoData(todoData.filter(item=>item.id!==id));
            }
        };
        const handleToggle = (id)=>{
            return ()=>{
                setTodoData(todoData.map(item=>{
                    if(item.id===id){
                        return {...item, status:!item.status};
                    }
                    return item;
                }));
            }
        };
      return (
        <>
          <AddTodo handleTasks={handleTasks}/>
          <TodoList todoData={todoData} handleDelete={handleDelete} handleToggle={handleToggle}/>
        </>
      );
    };