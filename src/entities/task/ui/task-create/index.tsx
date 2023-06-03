import React, { useEffect, useRef, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Input, InputRef, Space } from 'antd';
import { useOutsideClick } from 'shared/lib';

import classes from './styles.module.css';

interface TaskProps {
    taskProps: {
        visible: boolean;
        setVisible(visible: boolean): void;
        addNewTask(title: string): void;
    };
}

export function CreateTask({ taskProps }: TaskProps) {
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef<InputRef>(null);

    const handleConfirm = () => {
        if (inputValue.trim().length > 0) {
            taskProps.addNewTask(inputValue);
            setInputValue('');
        } else {
            inputRef.current?.focus({ cursor: 'start' });
        }
    };
    const handleClickOut = () => {
        if (inputValue.trim().length > 0) {
            taskProps.addNewTask(inputValue);
            setInputValue('');
        }
        taskProps.setVisible(false);
    };
    const handleCancel = () => {
        taskProps.setVisible(false);
        setInputValue('');
    };
    const divRef = useOutsideClick(handleClickOut);

    useEffect(() => {
        if (taskProps.visible) {
            inputRef.current?.focus({ cursor: 'start' });
        }
    }, [taskProps.visible]);

    return (
        <div ref={divRef}>
            <Space direction='vertical' className={classes.space}>
                <Input.TextArea
                    ref={inputRef}
                    placeholder='Ввести заголовок для этой карточки'
                    autoSize={{ minRows: 3, maxRows: 8 }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Space size='small'>
                    <Button type='primary' onClick={handleConfirm}>
                        Добавить карточку
                    </Button>
                    <Button
                        type='link'
                        icon={<CloseOutlined style={{ color: 'gray' }} />}
                        onClick={handleCancel}
                    />
                </Space>
            </Space>
        </div>
    );
}
