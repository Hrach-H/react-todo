let taskId = 2;
const initialState = [
    {
        id: 1,
        task: 'Learn React',
        isCompleted: true
    },
    {
        id: 2,
        task: 'Learn Redux',
        isCompleted: false
    }
];

export const todos = (state=initialState, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            return [
                ...state,
                {
                    id: ++taskId,
                    task: action.payload,
                    isCompleted: false
                },
            ];
        case 'DELETE_TODO':
            return state.filter((todo) => {
               return todo.task !== action.payload;
            });
        default:
            return state;
    }
};