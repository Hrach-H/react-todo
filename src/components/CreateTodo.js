import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { store } from '../index';
import { createTodo } from "../actions";


class CreateTodo extends React.Component {
    submit({ todo }) {
       store.dispatch(createTodo(todo));
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit.bind(this))}>
                <Field name="todo" component="input" type="text" placeholder="Create a task" />
                <button type="submit">Submit</button>
            </form>
        );
    }
}



export default reduxForm({
    form: 'create-todo',
})(CreateTodo);

