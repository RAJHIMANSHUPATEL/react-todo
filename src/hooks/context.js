import React, { useReducer, useState, createContext, useEffect } from 'react';
import { todo_reducer } from './reducer';

// Create a context for your app
const AppContext = createContext();

// Retrieve tasks from local storage
const getTasksFromLocalStorage = () => {
    const tasksJSON = localStorage.getItem('tasks');
    return tasksJSON ? JSON.parse(tasksJSON) : [];
};

// Setting up initial states
const initialState = {
    task_completed: false,
    // Load tasks from local storage
    all_tasks: getTasksFromLocalStorage(),
    isCompleted: false,

};

const ContextProvider = ({ children }) => {
    // Handling the input using useState
    const [inputValue, setInputValue] = useState('');

    // Handle input change
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    // Use Reducer
    const [state, dispatch] = useReducer(todo_reducer, initialState);

    // Add Task function
    const addTask = () => {
        dispatch({ type: "ADD_TASK", payload: { task: inputValue } });
        setInputValue('');
    };

    //Delete Task function
    const deleteTask = (taskId) => {
        dispatch({type: "DELETE_TASK", payload: taskId})
    }

    //Completed Task
    const completedTask = (taskId) => {
        dispatch({type: "IS_COMPLETED", payload: taskId})
    }


    // Save tasks to local storage whenever all_tasks changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(state.all_tasks));
    }, [state.all_tasks]);

    // Providing the context value
    return (
        <AppContext.Provider value={{ handleInput, inputValue, addTask, deleteTask, completedTask, ...state }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, ContextProvider };
