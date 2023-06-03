import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import type { InactiveSearchProps } from '../model/types';

import classes from './styles.module.css';

export const InactiveSearch = ({ setVisible }: InactiveSearchProps) => (
    <Input
        onFocus={() => setVisible(true)}
        size='middle'
        bordered={false}
        className={classes.search}
        value='Поиск'
        prefix={<SearchOutlined />}
    />
);
