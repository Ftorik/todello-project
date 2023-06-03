import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, InputRef, Space } from 'antd';
import { useOutsideClick } from 'shared/lib';

import { useListActions } from '../../lib';

import classes from './styles.module.css';

export const AddNewList = () => {
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef<InputRef>(null);
    const { addList } = useListActions();

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
            <Space direction='vertical' className={classes.space}>
                <Input
                    className={classes.input}
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
            className={classes.button}
            onClick={() => setInputVisible(true)}
        >
            Добавить еще одну колонку
        </Button>
    );
};
