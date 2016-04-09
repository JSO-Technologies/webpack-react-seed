import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../store/actions/todos.actions';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {description: ''};
    }

    syncDescription(event) {
        this.setState({description: event.target.value});
    }

    add() {
        const description = this.state.description.trim();
        this.props.dispatch(addTodo(description));
        this.setState({description: ''});
    }

    render() {
        return (
            <div>
                <h2>Add todo</h2>
                <form onSubmit={(e) => this.add(e)}>
                    <label>Description : </label>
                    <input
                        placeholder="Enter task description"
                        value={this.state.description}
                        onChange={(e) => this.syncDescription(e)}/>

                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo);