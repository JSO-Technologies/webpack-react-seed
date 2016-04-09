import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo';
import { toggleTodo } from '../../store/actions/todos.actions';
import { ALL, ACTIVE, DONE } from '../../store/actions/filter.actions';

const TodoList = ({state, dispatch}) => {
    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {
                    state.todos.map((item) => (
                        <li key={item.id}>
                            <Todo
                                id={item.id}
                                description={item.description}
                                done={item.done}
                                complete={(id) => dispatch(toggleTodo(id))}></Todo>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    let todos;
    switch(state.filter) {
        case ALL:
            todos = state.todos;
            break;
        case ACTIVE:
            todos = state.todos.filter((item) => !item.done);
            break;
        case DONE:
            todos = state.todos.filter((item) => item.done);
            break;
    }

    return {
        state: {
            todos: todos
        }
    }
};
export default connect(mapStateToProps)(TodoList);