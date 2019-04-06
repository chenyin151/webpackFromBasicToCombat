import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class List extends Component {
    render() {
        return (
            <div>
                <div>This is List Page</div>
            </div>
        )
    }
} 
ReactDOM.render(<List />, document.getElementById('root'));