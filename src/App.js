import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
    state = {
        todos: [{
            id: 1,
            title: 'LEARNING',
            COMPLETED: false
        }, {
            id: 2,
            title: 'READING',
            COMPLETED: false
        }, {
            id: 3,
            title: 'SLEEPING',
            COMPLETED: false
        }]
    }
    render() {																																	return (
        	<Todos tolist={this.state.todos}></Todos>
    	);
    }
}
export default App;
