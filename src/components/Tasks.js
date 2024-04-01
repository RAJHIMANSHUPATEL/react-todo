import React, { useContext } from 'react';
import SingleTask from './SingleTask';
import { AppContext } from '../hooks/context';

function Tasks() {
    const { all_tasks } = useContext(AppContext);
    return (
        <div className="tasks">
            
            {all_tasks.map(task => (
                <SingleTask
                    key={task.id} 
                    id={task.id}
                    task={task.task}
                    completed={task.completed} 
                />
            ))}
        </div>
    );
}

export default Tasks;
