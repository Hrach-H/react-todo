import React from 'react';


import CreateTodo from './CreateTodo';
import TodosList from './TodosList'


export default class Main extends React.Component {

    render() {
        return (
            <div>
                <h1>ToDos app</h1>
                <CreateTodo/>
                <TodosList />
            </div>
        );
    }


}

