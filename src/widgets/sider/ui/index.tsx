import React from 'react';
import { Layout, Menu, MenuProps } from 'antd';

import { DesktopOutlined, FileOutlined } from '@ant-design/icons';

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
    <AntSider className='sider'>
        <Menu className='sider-menu' defaultSelectedKeys={['1']} items={items} />
    </AntSider>
);
