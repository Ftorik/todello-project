import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BoardPage } from 'pages/board/ui';

import { persistor, store } from './store';

import './styles/index.css';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BoardPage />
            </PersistGate>
        </Provider>
    );
}

export default App;
