import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store/store';
import Home from '../components/home/home';
import Hello from '../components/hello/hello';
import TodoList from '../components/todos/todo-list';
import AddTodo from '../components/todos/add-todo';

const AppRoutes = () => (
    <Provider store={ store }>
        <Router history={ hashHistory }>
            <Route path="/" component={ Home }>
                <IndexRoute component={ TodoList }></IndexRoute>
                <Route path="add" component={ AddTodo }></Route>
                <Route path="hello/:name" component={ Hello }></Route>
            </Route>
        </Router>
    </Provider>
);

export default AppRoutes;