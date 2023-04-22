import React from 'react';
import { EditOutlined, MinusSquareOutlined } from '@ant-design/icons';
import { Space } from 'antd';

interface EditProps {
    editProps: {
        setVisible(visible: boolean): void;
        deleteListAndTasks(): void;
    };
}

export function EditFooter({ editProps }: EditProps) {
    return (
        <Space style={{ display: 'flex', justifyContent: 'space-around' }}>
            <EditOutlined onClick={() => editProps.setVisible(true)} />
            <MinusSquareOutlined onClick={editProps.deleteListAndTasks} />
        </Space>
    );
}
