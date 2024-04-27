const express = require("express");
const fs = require("fs"); 
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.text());
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
//API for home page
app.get("/",(req,res)=>{
    res.send("Welcome to Todo Assignment");
});
//API to get Todo data
app.get("/todo",(req,res)=>{
    //Read data from db.json
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            res.send(err);
        }else{
            const todosData = JSON.parse(data);
            res.send(todosData.todos);
        }  
    })
});

//API to add Todo data
app.post("/addTodo",(req,res)=>{
    //read data from db.json
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            res.send(err);
        }else{
            const todosData = JSON.parse(data);
            const todo_data = todosData.todos;
            //push data to db.json todos key
            todo_data.push(req.body);

            //write the data back to the db.json
            fs.writeFile("./db.json", JSON.stringify(todosData), (err) => {
                if (err) {
                  res.send(err);
                }else{
                  res.send("New Todo added successfully");
                }
            });
        }  
    })
});

//An API to update the status of all the todos that have even ID from false to true. This will work only if the todo with even ID has a status as false.

app.patch("/todoEvenStatus",(req,res)=>{
    //read data from db.json
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            res.send(err);
        }else{
            const todosData = JSON.parse(data);
            const todo_data = todosData.todos;
            //change the status of todo whose id is even
            todo_data.forEach((item)=>{
                if(item.id % 2 == 0 && item.status == false){
                    item.status = true;
                }
            })
            //write the data back to the db.json
            fs.writeFile("./db.json", JSON.stringify(todosData), (err) => {
                if (err) {
                  res.send(err);
                }else{
                  res.send("Even id status changed to true");
                }
            });
        }  
    })
});

//An API to Delete all the todos whose status is true.

app.delete("/todoDelete",(req,res)=>{
    //read data from db.json
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            res.send(err);
        }else{
            const todosData = JSON.parse(data);
            const todo_data = todosData.todos;
            //delete all the todos whose status is true
            todo_data.forEach((item)=>{
                if(item.status == true){
                    todo_data.splice(todo_data.indexOf(item),1);
                }
            })
            //write the data back to the db.json
            fs.writeFile("./db.json", JSON.stringify(todosData), (err) => {
                if (err) {
                  res.send(err);
                }else{
                  res.send("Deleted all the todos whose status is true");
                }
            });
        }  
    })
})


