import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

interface InactiveInactiveSearchProps {
    setVisible(visible: boolean): void;
}

export const InactiveSearch = ({ setVisible }: InactiveInactiveSearchProps) => (
    <Input
        onFocus={() => setVisible(true)}
        size='middle'
        bordered={false}
        className='task-search-input'
        value='Поиск'
        prefix={<SearchOutlined />}
    />
);
