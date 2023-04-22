import React from 'react';
import { Layout } from 'antd';
import { Board } from 'widgets/board';
import { Header } from 'widgets/header';
import { Sider } from 'widgets/sider';

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
