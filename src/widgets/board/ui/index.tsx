import React from 'react';
import { Space } from 'antd';
import { AddNewList } from 'entities/list/ui/new-list';

import { Lists } from './lists';

export function Board() {
    return (
        <Space align='start'>
            <Lists />
            <AddNewList />
        </Space>
    );
}
