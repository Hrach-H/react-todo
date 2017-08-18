import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { todos } from './todos'

export const reducers = combineReducers({
    todos,
    form: formReducer
});