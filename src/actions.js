export const createTodo = (todo) => {
    return {
        type: 'CREATE_TODO',
        payload: todo
    }
};