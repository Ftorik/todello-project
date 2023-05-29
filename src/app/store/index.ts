import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { listModel } from 'entities/list';
import { taskModel } from 'entities/task';
import { userModel } from 'entities/user';

const persistConfig = {
    key: 'todello',
    storage,
};

export const rootReducer = combineReducers({
    tasks: taskModel.reducer.taskReducer,
    lists: listModel.reducer.listReducer,
    users: userModel.reducer.userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);
