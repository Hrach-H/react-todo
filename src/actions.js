export const createTodo = (todo) => {
    return {
        type: 'CREATE_TODO',
        payload: todo
    }
};

export const deleteTodo = (todo) => {
    return {
        type: 'DELETE_TODO',
        payload: todo
    }
};