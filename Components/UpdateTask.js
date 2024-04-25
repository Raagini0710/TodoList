import '../Style/UpdateTask.css'
import React,{useState} from 'react'
import axios from 'axios'

export default function UpdateTask(props) {
    const [task,setTask]=useState(props.task.todo)
    const UpdateTask=()=>{
        if(task.trim()===''|| props.task.todo === task){
            props.removePopup()
        }else{
            axios.put(`http://localhost:8000/api/tasks/${props.task._id}`,{
                _id :props.task._id,
                todo:task,
                isComplete:props.task.isComplete
            }).then(res =>{
                props.removePopup()
                props.updatetask(res.data)
            }).catch(err=> console.log(err))
            
        }
    }
  return (
    <div className='popup'>
        <div className='pop-up-content'>
            <input type='text' 
            placeholder='Update Task' 
            value={task} 
            onChange={event=>setTask(event.target.value)}/>
            <button onClick={()=> UpdateTask()}>Update</button>
        </div>

    </div>
  )
}