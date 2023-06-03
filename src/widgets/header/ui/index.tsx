import React from 'react';
import { Layout } from 'antd';
import { Search } from 'features/search';

import classes from './styles.module.css';

const { Header: AntHeader } = Layout;

export const Header = () => (
    <AntHeader className={classes.header}>
        <div className={classes.text}>ToDeLLo</div>
        <div className={classes.search}>
            <Search />
        </div>
    </AntHeader>
);
