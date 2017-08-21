import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { store } from '../index';
import { deleteTodo } from '../actions';
import { editTodo } from "../actions";



class TodosListItem extends React.Component {

    handleDelete() {
        store.dispatch(deleteTodo(this.props.task));
    }

    handleEdit() {
        store.dispatch(editTodo(this.props.task));
    }

    componentWillUpdate() {
        this.props.initialize({
            ['input_' + this.props.id]: this.props.task
        });
    }

    renderButtons() {
        if (!this.props.editing) {
            return (
                <td>
                    <button onClick={this.handleEdit.bind(this)}>Edit</button>
                    <button onClick={this.handleDelete.bind(this)}>Delete</button>
                </td>
            );
        } else {
            return (
                <td>
                    <button>Save</button>
                    <button onClick={this.handleEdit.bind(this)}>Cancel</button>
                </td>
            );
        }
    }

    renderTask() {
        if (!this.props.editing) {
            return (
                <td>{this.props.task}</td>
            );
        }
        else {
            return (
                <form>
                    <Field name={'input_' + this.props.id} component="input" type="text" />
                </form>
            );
        }
    }


    render() {
        return (
            <tr>
                {this.renderTask()}
                {this.renderButtons()}
            </tr>
        );
    }
}



export default reduxForm({
    form: 'edit-todo',
    enableReinitialize: true
})(TodosListItem);

