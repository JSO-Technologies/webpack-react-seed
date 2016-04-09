import { ADD_TODO, TOGGLE_TODO, EDIT_TODO } from '../actions/todos.actions';

function replace(todos, item) {
    const firstTodos = todos.filter((next) => next.id < item.id);
    const lastTodos = todos.filter((next) => next.id > item.id);
    return [
        ...firstTodos,
        item,
        ...lastTodos
    ];
}

export function todos(state = [{id: 0, description: 'my todo', done: false}], action = {}) {
    switch (action.type) {
        case ADD_TODO:
            const id = state.length ? state[state.length - 1].id + 1 : 0;

            const newTodo = {
                id: id,
                description: action.description,
                done: false
            };
            return [
                ...state,
                newTodo
            ];

        case TOGGLE_TODO:
            const todoToToggle = state.find((item) => item.id === action.id);
            if (!todoToToggle) {
                return state;
            }

            return replace(state, {...todoToToggle, done: !todoToToggle.done});

        case EDIT_TODO:
            const todoToEdit = state.find((item) => item.id === action.id);
            if (!todoToEdit) {
                return state;
            }

            return replace(state, {...todoToEdit, description: action.description});

        default:
            return state;
    }
}