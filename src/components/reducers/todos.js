const initialState = [
    {
        task: 'Learn React',
        isCompleted: true
    },
    {
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
                    task: action.payload,
                    isCompleted: false
                },
            ];
        default:
            return state;
    }
};