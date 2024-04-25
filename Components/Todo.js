import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Addtask from './AddTask'
import Todolist from './TodoList'
import UpdateTask from './UpdateTask'

export default function Todo() {
    const [todolist,setTodolist]=useState([])
    const [tasktoUpdate, setTasktoUpdate]=useState({})
    const [showPopup,setShowPopup]=useState(false)
    useEffect(()=>{
      axios.get('http://localhost:8000/api/tasks')
      .then(res=>{
        setTodolist(res.data)
      })
      .catch(err=> console.log(err))
    },[]);

    const addTask=(newTask)=>{
        setTodolist([...todolist,newTask])
    }

    const taskcomplete=(task)=>{
        const newList=[...todolist];
        newList.forEach(item=>{
          if(item._id === task._id){
            item.isComplete=task.isComplete;
          }
        })
        setTodolist(newList);
    }
    const removeTask=(task)=>{
      const newList=todolist.filter(item=>!(item._id === task._id))
      setTodolist(newList);
    }
    const updatetask=task=>{
       const newList=[...todolist]
       newList.forEach(item=>{
        if(item._id === task._id){
          item.todo = task.todo
        }
       })
       setTodolist(newList)
    }
  return (
    <div>
      <Addtask addTask={addTask} />
      <Todolist todolist={todolist} 
      taskcomplete={taskcomplete} 
      removeTask={removeTask}
      tasktoUpdate={task=> setTasktoUpdate(task)} 
      showPopup={()=>setShowPopup(!showPopup) }/>
      {showPopup && <UpdateTask task={tasktoUpdate} 
      updatetask={updatetask}
      removePopup={()=> setShowPopup(!showPopup)}/>}
    </div>
  )

}