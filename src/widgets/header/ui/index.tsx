import React from 'react';
import { Layout } from 'antd';
import { Search } from 'features/search';

const { Header: AntHeader } = Layout;

export const Header = () => (
    <AntHeader className='header'>
        <div className='head-text'>ToDeLLo</div>
        <div className='head-search'>
            <Search />
        </div>
    </AntHeader>
);
