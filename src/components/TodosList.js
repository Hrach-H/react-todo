import React from 'react';
import { connect } from 'react-redux';

import TodoListItem from './TodosListItem'

class TodosList extends React.Component {
    renderTasks() {
        return this.props.todos.map((todo) => {
            return <TodoListItem key={todo.id} {...todo} />
        });
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderTasks()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosList);