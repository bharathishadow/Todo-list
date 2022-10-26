import React, {useState} from "react";
import "./style.css";
import { AiFillDelete } from 'react-icons/ai';


export default function App() {
  const[todoList, setTodoList] = useState([])
  const[newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id:todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask ,
    }
    setTodoList([...todoList,task])
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id
      // if (task === taskName){
      //   return false
      // }else {
        
      //   return true
      // }
    })
    setTodoList(newTodoList)
  }

  return (
    <div>
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add items</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
         return <div className="l-list" key ={task.id}>
            <p>{task.taskName}</p>
            <AiFillDelete onClick={() => deleteTask(task.id)}  />
            
         </div>
        })}
      </div>
      
    </div>
  );
}
