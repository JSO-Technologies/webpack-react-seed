import React from 'react';
import { Link } from 'react-router';

const Menu = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link activeClassName="active" to="/add">Add todo</Link>
        <Link activeClassName="active" to="/hello/Jimmy">Hello</Link>
    </nav>
);

export default Menu;