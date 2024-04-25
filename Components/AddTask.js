import React, { useState } from 'react';
import axios from 'axios';
import '../Style/AddTask.css';

export default function Addtask(props) {
    const [task, setTask] = useState('');

    const addTask = async () => {
        if (!task.trim()) return;

        try {
            const response = await axios.post('http://localhost:8000/api/tasks', {
                todo: task,
                isComplete: false
            });
            props.addTask(response.data);
            setTask('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div className='addtask'>
            <input type='text' placeholder='Add Task' value={task} onChange={(event) => setTask(event.target.value)} />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}
