import React, { Component } from 'react';
import Todoitem from './Todoitem'
import PropTypes from 'prop-types'

class Todos extends Component {
    render() {
        return this.props.tolist.map((el) => (
            <Todoitem key={el.id} todo={el}></Todoitem>
        ))
    }
}
Todos.propTypes = {
    tolist: PropTypes.array.isRequired
}
export default Todos;
