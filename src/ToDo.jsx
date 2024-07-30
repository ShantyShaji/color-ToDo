import React, { useState } from 'react'

const ToDo = () => {
  const [tasks,setTasks]=useState(["eat apple","drink water","walk 2km"])
  const [newTask,setNewTask]=useState("")

  function handleChangeInput(e){
    setNewTask(e.target.value);
  }
  function addTask(){
    if(newTask.trim()!==""){
    setTasks(t=>[...t,newTask]);
    setNewTask("");
    }
  }
  function deleteTask(index){
    const updatedTask=tasks.filter((_,i)=> i!==index);
    setTasks(updatedTask);
  }
  function taskUp(index){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);

    }
  }
  function taskDown(index){
    if(index  <tasks.length-1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);

    }
  }
  

  return (
    <div className='main w-full h-full flex flex-col items-center justify-center gap-10'>
      <h1 className='text-center text-3xl underline'>TODO List</h1>
      <div className="box1 flex items-center justify-around gap-3">
      <input type="text" className='w-[24vw] h-[2vw] border-2 border-black'  placeholder='Enter a task...' value={newTask} onChange={handleChangeInput}/>
      <button className='w-[5vw] h-[2vw] bg-green-600 text-white' onClick={addTask}>Add</button>
      </div>
      <ol className='flex flex-col items-center justify-center gap-5'>
        {tasks.map((task,index)=>
        <li key={index} className='w-[30vw] h-[9vh] border-black text-black border-2  flex items-center justify-center gap-5'>
          <span>{task}</span>
          <button className='w-[5vw] h-[2vw] bg-red-600 text-white' onClick={()=>deleteTask(index)}>delete</button>
          <button className='w-[3vw] h-[2vw] border-2 bg-sky-600 text-white' onClick={()=>taskUp(index)}>👆</button>
          <button className='w-[3vw] h-[2vw] border-2 bg-sky-600 text-white' onClick={()=>taskDown(index)}>👇</button>
        </li>
        )}
      </ol>
    </div>
  )
}

export default ToDo;
