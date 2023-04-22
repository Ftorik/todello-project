import React from 'react';
import ReactDOM from 'react-dom';
import { DevSupport } from '@react-buddy/ide-toolbox';

import App from './app';
import { ComponentPreviews, useInitial } from './dev';

ReactDOM.render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
            <App />
        </DevSupport>
    </React.StrictMode>,
    document.getElementById('root'),
);
