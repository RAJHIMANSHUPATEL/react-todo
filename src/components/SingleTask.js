import React, { useContext } from 'react';
import './SingleTask.css'
import { AppContext } from '../hooks/context';

function SingleTask({ id, task, completed }) {
    const {deleteTask,completedTask} = useContext(AppContext)
    return (
        <div className="single-task" onClick={() => completedTask(id)}>
            <div key={id} >
                <p className={`${completed && "completed"} `}>{task}</p>
            </div>
            <button className='delete-btn' onClick={()=>deleteTask(id)}>Delete</button>
        </div>
    );
}

export default SingleTask;


