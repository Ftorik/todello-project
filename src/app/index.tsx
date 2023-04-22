import React from 'react';
import { Provider } from 'react-redux';

import { BoardPage } from '../pages/board';

import { store } from './store';

import './styles/index.css';

function App() {
    return (
        <Provider store={store}>
            <BoardPage />
        </Provider>
    );
}

export default App;
