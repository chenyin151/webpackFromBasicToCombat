import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Child from './child/child';
import Child from 'delllee';

class App extends Component {
    render() {
        return (
            <div>
                <div>This is App121111</div>
                <Child />
            </div>
        )
    }
} 
ReactDOM.render(<App />, document.getElementById('root'));