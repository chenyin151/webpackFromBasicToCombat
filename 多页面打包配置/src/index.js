import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <div>This is Home Page</div>
            </div>
        )
    }
} 
ReactDOM.render(<App />, document.getElementById('root'));