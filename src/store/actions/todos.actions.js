export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id: id
    }
};

export const addTodo = (description) => {
    return {
        type: ADD_TODO,
        description: description
    }
};