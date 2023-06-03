import React from 'react';
import { Layout } from 'antd';
import { Board } from 'widgets/board/ui';
import { Header } from 'widgets/header/ui';
import { Sider } from 'widgets/sider/ui';

import classes from './styles.module.css';

const { Content } = Layout;

export const BoardPage = () => (
    <Layout className={classes.height}>
        <Header />
        <Layout className={classes.layout}>
            <Sider />
            <Content className={classes.content}>
                <Board />
            </Content>
        </Layout>
    </Layout>
);
