import React from 'react';
import { DesktopOutlined, FileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

const { Sider: AntSider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode): MenuItem {
    return { label, key, icon } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <DesktopOutlined />),
    getItem('Option 2', '2', <FileOutlined />),
];

export const Sider = () => (
    <AntSider className='sider'>
        <Menu className='sider-menu' defaultSelectedKeys={['1']} items={items} />
    </AntSider>
);
