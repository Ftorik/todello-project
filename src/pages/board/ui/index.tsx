import React from 'react';
import { Layout } from 'antd';
import { Board } from 'widgets/board/ui';
import { Header } from 'widgets/header/ui';
import { Sider } from 'widgets/sider/ui';

const { Content } = Layout;

export const BoardPage = () => (
    <Layout className='layout-min-height'>
        <Header />
        <Layout className='site-layout board-layout'>
            <Sider />
            <Content className='board-content'>
                <Board />
            </Content>
        </Layout>
    </Layout>
);
