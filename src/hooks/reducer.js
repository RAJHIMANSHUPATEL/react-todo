import uuid4 from "uuid4";

const todo_reducer = (state, action) => {
    // Adding task
    if (action.type === "ADD_TASK") {
        if (action.payload.task.trim() !== '') {
            const newTask = {
                id: uuid4(),
                task: action.payload.task,
            }
            return {
                ...state,
                all_tasks: [...state.all_tasks, newTask]
            };
        }
        return state;
    }

    // Deleting Task
    if (action.type === "DELETE_TASK") {
        const updatedTasks = state.all_tasks.filter(task => task.id !== action.payload);
        return {
            ...state,
            all_tasks: updatedTasks
        };
    }

    // Completed Task (Toggle completion state of a single task)
    if (action.type === "IS_COMPLETED") {
        const updatedTasks = state.all_tasks.map(task => {
            if (task.id === action.payload) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        });
        return {
            ...state,
            all_tasks: updatedTasks
        };
    }

    return state;
};

export { todo_reducer };
