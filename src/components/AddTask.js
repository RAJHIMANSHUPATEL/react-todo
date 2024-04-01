import React, { useContext } from 'react'
import './AddTask.css'
import { AppContext } from '../hooks/context'

function AddTask() {
    const { handleInput, inputValue, addTask } = useContext(AppContext);

    return (
        <div className='add-task'>
            <div className="header">
                <h1>To-do App</h1>
            </div>
            <div className='add-task-input'>
                <input
                    type="text"
                    placeholder='Add Task...'
                    value={inputValue}
                    onChange={handleInput} />
                <button className='add-task-btn' onClick={addTask}>Add</button> {/* Use addTask here */}
            </div>
        </div>
    )
}

export default AddTask
