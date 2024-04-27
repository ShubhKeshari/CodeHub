import React, { useState } from "react";

interface SingleTask{
  id: number;
  title: string;
  description: string;
};

const initState:SingleTask[] = [
    { id: 1, title: "Task-1", description: "Task 1 Description" },
    { id: 2, title: "Task-2", description: "Task 2 Description" },
  ]
const TaskComponent = () => {
//   const [tasks, setTasks] = useState<SingleTask[]>([
//     { id: 1, title: "Task-1", description: "Task 1 Description" },
//     { id: 2, title: "Task-2", description: "Task 2 Description" },
//   ]);

const [tasks, setTasks] = useState(initState);
  return (
    <div>
      <h1>Tasks List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <form action="" onSubmit={()=>{}}></form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export {TaskComponent};