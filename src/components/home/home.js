import React from 'react';
import Menu from './menu';

const Home = (props) => (
    <div>
        <h1>Webpack react seed</h1>
        <Menu/>
        {props.children}
    </div>
);

export default Home;