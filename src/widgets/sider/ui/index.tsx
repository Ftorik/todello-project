import React from 'react';
import { DesktopOutlined, FileOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';

import classes from './styles.module.css';

const { Sider: AntSider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode): MenuItem {
    return { label, key, icon } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option_1', '1', <DesktopOutlined />),
    getItem('Option 2', '2', <FileOutlined />),
];

export const Sider = () => (
    <AntSider className={classes.sider}>
        <Menu className={classes.menu} defaultSelectedKeys={['1']} items={items} />
    </AntSider>
);
