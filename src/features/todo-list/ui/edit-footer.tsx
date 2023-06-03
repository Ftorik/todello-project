import React from 'react';
import { EditOutlined, MinusSquareOutlined } from '@ant-design/icons';
import { Space } from 'antd';

import { EditProps } from '../model/types';

import classes from './styles.module.css';

export function EditFooter({ editProps }: EditProps) {
    return (
        <Space className={classes.space}>
            <EditOutlined onClick={() => editProps.setVisible(true)} />
            <MinusSquareOutlined onClick={editProps.deleteListAndTasks} />
        </Space>
    );
}
