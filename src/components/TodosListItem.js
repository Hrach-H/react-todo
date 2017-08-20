import React from 'react';
import { store } from '../index';
import { deleteTodo } from '../actions';

export default class TodosListItem extends React.Component {
    handleDelete() {
        store.dispatch(deleteTodo(this.props.task));
    }

    render() {
        return (
            <tr>
                <td>{this.props.task}</td>
                <td>
                    <button>Edit</button>
                    <button onClick={this.handleDelete.bind(this)}>Delete</button>
                </td>
            </tr>
        );
    }


}