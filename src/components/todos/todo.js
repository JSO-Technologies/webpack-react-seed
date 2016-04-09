import React from 'react';

function getStyle(done) {
    return {
        textDecoration: (done ? 'line-through' : 'none'),
        cursor: (done ? 'default' : 'pointer')
    };
}

const Todo = ({id, description, done, complete}) => {
    return (
        <div style={getStyle(done)}
             onClick={() => complete(id)}>
            {description}
        </div>
    );
};

Todo.propTypes = {
    id: React.PropTypes.number.isRequired,
    description: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool.isRequired,
    complete: React.PropTypes.func.isRequired
};

export default Todo;