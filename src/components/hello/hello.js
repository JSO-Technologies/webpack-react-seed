import React from 'react';
import Print from './../../services/print.service';

class Hello extends React.Component {
    componentDidMount() {
        Print.sayHello();
    }

    render() {
        return (
            <div className="hello">
                Hello {this.props.params.name || 'Unknown'}!
            </div>
        );
    }
}

export default Hello;