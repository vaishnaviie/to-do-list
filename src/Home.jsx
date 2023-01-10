import React, { useState, useEffect } from "react";
import "./Home.scss";
import Task from "./Task";

const Home = () => {

  const initialArray=localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")): [];

  const [tasks,setTasks]=useState(initialArray)
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  // console.log(...tasks)
  const handleSubmit=(e)=>{
    e.preventDefault();
    setTasks([...tasks,{title,description}]);
    setTitle("");
    setDescription("");
  }

  const deleteTask=(index)=>{
    const filteredArray=tasks.filter((val,i)=>{
      return i!==index;
    })
    setTasks(filteredArray);

  }

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  return (
    
    <div className="container">
      <h1>Daily Goals</h1>
      <form onSubmit={handleSubmit}>
        <input className="inputs" 
        type="text" 
        placeholder="title"
        value={title} 
        onChange={(e)=>setTitle(e.target.value)} />

        <textarea className="text-area" placeholder="description" 
        value={description} 
        onChange={(e)=>setDescription(e.target.value)} />
        
        <button>Add</button>
      </form>

      {tasks.map((item,index)=>(
        <Task 
        title={item.title} 
        description={item.description}
        key={index}
        deleteTask={deleteTask}
        index={index} />

      ))}
      
    </div>
  );
};

export default Home;
