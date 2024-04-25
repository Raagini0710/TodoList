import '../Style/TodoList.css';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

export default function Todolist(props) {
    const todolist = props.todolist.map((task, index) => {
        const taskcomplete = (task) => {
            axios
                .put(`http://localhost:8000/api/tasks/${task._id}`, {
                    _id: task._id,
                    todo: task.todo,
                    isComplete: !task.isComplete
                })
                .then((res) => props.taskcomplete(res.data))
                .catch((err) => console.log(err));
        };
        const removeTask = (id) => {
            axios
                .delete(`http://localhost:8000/api/tasks/${id}`)
                .then((res) => props.removeTask(res.data))
                .catch((err) => console.log(err));
        };

        return (
            <li key={index}>
                <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                    <CheckIcon className={task.isComplete ? 'isComplete' : 'Checkicon'} />
                    <p className={task.isComplete ? 'taskcomplete' : ''} onClick={() => taskcomplete(task)}>
                        {task.todo}
                    </p>
                </div>
                <div>
                    <EditIcon className='edit' onClick={()=>{
                        props.tasktoUpdate(task)
                        props.showPopup()
                    }} />
                    <CloseIcon className='close' onClick={() => removeTask(task._id)} />
                </div>
            </li>
        );
    });

    return (
        <div className='tasklist'>
            <ul>{todolist}</ul>
        </div>
    );
}
