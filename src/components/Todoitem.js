import React, { Component } from 'react';
import Todos from "./Todos";
import PropTypes from 'prop-types'

export class Todoitem extends Component {
    render() {
        return (
            <li>{this.props.todo.title}</li>
        );
    }
}
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default Todoitem;
