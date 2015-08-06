import React from 'react';
import Print from './print';

export default class Home extends React.Component {
    propTypes: {
        name: React.PropTypes.string.isRequired
    };

    render() {
        Print.sayHello();
        return (
            <div>
                Hello {this.props.name}!
            </div>
        );
    }
}
