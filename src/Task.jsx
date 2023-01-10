import React from 'react';
import "./Task.scss";

const Task = ({title,description,deleteTask,index}) => {
  return (
    <div className='task-container'>
        <div className='task'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <button onClick={()=>deleteTask(index)}>-</button>
    </div>
  )
}

export default Task