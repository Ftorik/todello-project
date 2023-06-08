import React from 'react';
import { Space } from 'antd';
import { NewList } from 'entities/list/ui/new-list';

import { Lists } from './lists';

export function Board() {
    return (
        <Space align='start'>
            <Lists />
            <NewList />
        </Space>
    );
}
