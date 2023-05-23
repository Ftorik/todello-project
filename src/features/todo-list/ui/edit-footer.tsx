import React from 'react';
import { EditOutlined, MinusSquareOutlined } from '@ant-design/icons';
import { Space } from 'antd';

import { EditProps } from '../model/types';

export function EditFooter({ editProps }: EditProps) {
    return (
        <Space style={{ display: 'flex', justifyContent: 'space-around' }}>
            <EditOutlined onClick={() => editProps.setVisible(true)} />
            <MinusSquareOutlined onClick={editProps.deleteListAndTasks} />
        </Space>
    );
}
