import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, InputRef, Space } from 'antd';
import { listLib } from 'entities/list';
import { useOutsideClick } from 'shared/lib';

export const AddNewList = () => {
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef<InputRef>(null);
    const { addList } = listLib.useListActions();

    const handleCancel = () => setInputVisible(false);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        handleCancel();
        if (inputValue.trim()) {
            addList(inputValue);
        } else {
            setInputValue(inputValue);
        }
    };

    const divRef = useOutsideClick(handleCancel);

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus({ cursor: 'all' });
        }
    }, [inputVisible]);

    return inputVisible ? (
        <div ref={divRef}>
            <Space
                direction='vertical'
                style={{
                    display: 'flex',
                    border: '1px solid #d9d9d9',
                    backgroundColor: 'rgb(235, 236, 240)',
                    padding: 10,
                    borderRadius: 8,
                }}
            >
                <Input
                    style={{ fontSize: 16, fontWeight: '500' }}
                    size='small'
                    ref={inputRef}
                    value={inputValue}
                    onChange={handleInputChange}
                    onPressEnter={handleInputConfirm}
                    type='text'
                />
                <Space>
                    <Button type='primary' onClick={handleInputConfirm}>
                        Добавить список
                    </Button>
                    <Button onClick={handleCancel} type='ghost'>
                        X
                    </Button>
                </Space>
            </Space>
        </div>
    ) : (
        <Button
            icon={<PlusOutlined />}
            style={{ backgroundColor: 'rgb(235, 236, 240,0.3)', color: 'white' }}
            onClick={() => setInputVisible(true)}
        >
            Добавить еще одну колонку
        </Button>
    );
};
