let taskId = 2;
let editingState = {};
const initialState = [
    {
        id: 1,
        task: 'Learn React',
        editing: false
    },
    {
        id: 2,
        task: 'Learn Redux',
        editing: false
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
                    editing: false
                },
            ];
        case 'DELETE_TODO':
            return state.filter((todo) => {
               return todo.task !== action.payload;
            });
        case 'EDIT_TODO':
            if (!editingState.isBeingEdited || (editingState.isBeingEdited && (editingState.task === action.payload))) {
                return state.map((todo) => {
                    if (todo.task === action.payload) {
                        todo.editing = !todo.editing;
                        editingState = {
                            task: todo.task,
                            isBeingEdited: !editingState.isBeingEdited
                        };
                    }
                    return todo;
                });
            } else {
                return state;
            }
        default:
            return state;
    }
};