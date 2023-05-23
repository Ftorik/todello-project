import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import type { InactiveSearchProps } from '../model/types';

export const InactiveSearch = ({ setVisible }: InactiveSearchProps) => (
    <Input
        onFocus={() => setVisible(true)}
        size='middle'
        bordered={false}
        className='task-search-input'
        value='Поиск'
        prefix={<SearchOutlined />}
    />
);
