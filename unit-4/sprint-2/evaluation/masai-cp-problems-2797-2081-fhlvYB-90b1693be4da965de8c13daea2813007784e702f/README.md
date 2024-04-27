<h1 style="color:#397ce7">
HCJ (HTML, CSS, JavaScript)-Task-Manager-Application
</h1>

<h2 style="color:red">
Submission Instructions [Please note]:
</h2>

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package-lock.json to GitHub
 - Do not change any `class` name and `id`.

<h2 style="color:red">
Installation:
</h2>

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
- `npm install --engine-strict`
- `npm start` - to run app

<h2 style="color:#397ce7">
Maximum Marks - 24
</h2>
- The Submission should not contain spaces; for example,/js-101 folder/eval will not work

```
   ✅ Able to submit - 1 mark ( minimum score )
   ✅ should able to add a tasks and update localStorage - 2 marks
   ✅ should show error for empty task text - 1 marks
   ✅ should show all the tasks in the table with remove button and toggle status button - 1 marks
   ✅ should able to toggle status of a task and update the local storage - 2 marks
   ✅ should able to add a tasks in deleted tasks and update local storage - 2 marks
   ✅ should show different text color for different priority - 1 marks
   ✅ should show different background color of buttons for different status while add tasks - 1 marks
   ✅ should show different background color of buttons for different status - 1 marks
   ✅ should able to show all the deleted tasks with restore and delete button - 1 marks
   ✅ should able to restore a deleted tasks - 2 marks
   ✅ should able to delete permanently a remove tasks - 2 marks
   ✅ should able to filter deleted tasks by Priority -  2 marks
   ✅ should able to filter deleted tasks by Priority default options show all the tasks -  1 marks
   ✅ should able to filter deleted task by status - 2 marks
   ✅ should able to filter deleted tasks by status default options show all the tasks - 1 marks
```

## Objectives

- Learn the HTML, CSS and Javascript.
- Learn DOM and Local Storage


<h2 style="color:#397ce7">
Folder Structure (Important Files):
</h2>

```
├── deletedTask.html
├── index.html
├── scripts
|  ├── deletedTask.js
|  └── deletedTask.js
├── package.json
└── README.md
```

<h2 style="color:#397ce7">
Problem Statement:
</h2>

The challenge is to build a task Manager application, where one can add a task, remove task to deletedTask and restore the deletedTask  and delete, filter by priority and status. The application should consist of two main pages:

1. index.html (Landing Page for creating task)
2. deletedTask.html (for delete and filter deleted task)

<h2 style="color:tomato">
Important Points
</h2>

- <p style="color:tomato">For filtering should be done using in-build javascript filter method.</p>

<h2 style="color:#397ce7">
Navbar (already created no need to create)
</h2>

Navigation bar using `<nav>` tag and show all anchor tags inside nav container with the following links:

| Anchor TextContent | href Link                    |
| ------------------ | ---------------------------- |
| Home               | [index.html](index.html)     |
| deleted Tasks            | [deletedTask.html](deletedTask.html) |

<h2 style="color:#397ce7">
1. index.html ( Landing Page)
</h2>

- in this page there are two section one for creating a task and 2nd one is a table to shoe the added tasks dynamically.

- **add task**

  - one input tag to take the task title.
  - one select tag to take the priority level.with options `low`, `medium`,`high`.
  - one button with `id=submit-btn` to add the task to localStorage with the key name `tasks`.  
  - If user click on the button without any text or without select priority, alert will shown with message `Task cannot be empty!`

  ```javascript
   structure of data to be stored (array of object)

   [
     {
      title: "example",
      priority: "low",
      status: "pending" // by default have another two  options "in-progress" and "Complete"
     }
     
   ]

  ```
- **table**
   - In the table the tasks information should shown as bellow

|    Name      |     Priority    |    Status      |     Remove    |    
| ------------ | --------------- | -------------- |   ----------- |
| show the `title` of the task | Show the `priority` of the task and based on the priority of the task the the  color of the  text in `td` will change for `low` priority color `rgb(0,128,0)`, for `medium` priority the  color should be `rgb(0,0,255)` , for `high` priority the  color should be `rgb(255,0,0)` | for showing the status the create a button with `class=toggleStatus` if the status is pending the text content of the button should be `pending`  and on I progress `in-progress` and on completed `complete`. on click the button the status should toggle and it should reflect on `page` and `localStorage` both  |   create a button with `class=remove-btn` on click the button the task should remove from `tasks` in localStorage and added to localStorage with key name `deletedTasks` in a form of array of object (e.g:same as tasks) |
 
<figure>
  <img src="https://i.imgur.com/iSg3W92.png" alt="Image Description" style="width: 100%; border: 1px solid #ccc;">
  <figcaption style="text-align: center; font-weight: bold;">Image.1 - index Page</figcaption>
</figure>

<h2 style="color:#397ce7">
2. deletedTask.html
</h2>

- On load this page get the deletedTask from local storage and show in the table as below format:-  

|     Name      |     Priority    |    Status      |    Restore   |      Delete      |
| ------------- | --------------- | -------------- | ------------ | --------------   |
|  show the `title` of the task   | Show the `priority` of the task and based on the priority of the task the the  color of the  text in `td` will change for `low` priority color `rgb(0,128,0)`, for `medium` priority the  color should be `rgb(0,0,255)` , for `high` priority the  color should be `rgb(255,0,0)`| show the `status` of the task.  |   create a button with `class=restore-btn` on click the button the task should remove from `deletedTasks` in localStorage and added to localStorage with key name `tasks`.and it should reflect on `page` and `localStorage` both  |  create a button with `class=delete-btn` on click the button the task should remove from `deletedTasks` in localStorage and it should reflect on `page` and `localStorage` both   |

- **_filter Task**
- There are two select tags for filter tasks according to `status` and `priority`.
   - select tag with `id=priorityFilter` for selecting the priority , When an option is selected, only tasks corresponding to the chosen priority will be displayed on the page. 
   - The default option should be `Filter by Priority`(value of this button should empty string) with that option all the tasks should be displayed on the page.
   - select tag with `id=statusFilter` for selecting the status , When an option is selected, only tasks corresponding to the chosen status will be displayed on the page. 
   - The default option should be `Filter by Status` (value of this button should empty string) with that option all the tasks should be displayed on the page.

<figure>
  <img src="https://i.imgur.com/K5W8xLx.png" alt="Image Description" style="width: 100%; border: 1px solid #ccc;">
  <figcaption style="text-align: center; font-weight: bold;">Image.2 - deletedTask.html</figcaption>
</figure>
<figure>
  <img src="https://i.imgur.com/XHOnau1.png" alt="Image Description" style="width: 100%; border: 1px solid #ccc;">
  <figcaption style="text-align: center; font-weight: bold;">Image.3 - deleted Task page with priority select</figcaption>
</figure>
<figure>
  <img src="https://i.imgur.com/tXEFcHK.png" alt="Image Description" style="width: 100%; border: 1px solid #ccc;">
  <figcaption style="text-align: center; font-weight: bold;">Image.4 - deleted Task page with status select </figcaption>
</figure>

<h2 style="color:#397ce7">
Tested on cp.masaischool.com
</h2>

<figure>
  <img src="https://i.imgur.com/OaxVTb6.png" alt="Image Description" style="width: 100%; border: 1px solid #ccc;">
  <figcaption style="text-align: center; font-weight: bold;">Image.5 - Tested</figcaption>
</figure>

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it at the last minute
- Try to keep one submission at a time
- If you try to use the VSCodes live server, it won't work. You can use the npm commands provided in this file only.
