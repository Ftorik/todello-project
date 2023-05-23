import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';

import { ExampleLoaderComponent, PaletteTree } from './palette';
import { BoardPage } from '../pages/board/ui';

const ComponentPreviews = () => (
    <Previews palette={<PaletteTree />}>
        <ComponentPreview path='/PaletteTree'>
            <PaletteTree />
        </ComponentPreview>
        <ComponentPreview path='/ExampleLoaderComponent'>
            <ExampleLoaderComponent />
        </ComponentPreview>
        <ComponentPreview path='/BoardPage'>
            <BoardPage />
        </ComponentPreview>
    </Previews>
);

export default ComponentPreviews;
