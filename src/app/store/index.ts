import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { listModel } from 'entities/list';
import { taskModel } from 'entities/task';
import { userModel } from 'entities/user';

export const rootReducer = combineReducers({
    tasks: taskModel.reducer.taskReducer,
    lists: listModel.reducer.listReducer,
    users: userModel.reducer.userReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
