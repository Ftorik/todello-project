import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, InputRef, Space } from 'antd';
import { useOutsideClick } from 'shared/lib';

import { useListActions } from '../../lib';

import classes from './styles.module.css';

export type EditListType = {
    editProps: {
        isEditEnabled: boolean;
        hideEdit: () => void;
        setIsListAdded: (value: boolean) => void;
    };
};

export const EditList = ({ editProps }: EditListType) => {
    const { isEditEnabled, hideEdit, setIsListAdded } = editProps;
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef<InputRef>(null);
    const divRef = useOutsideClick(hideEdit);

    const { addList } = useListActions();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue.trim()) {
            addList(inputValue);
            setIsListAdded(true);
        } else {
            setInputValue(inputValue);
        }
        hideEdit();
    };

    useEffect(() => {
        if (isEditEnabled) {
            inputRef.current?.focus({ cursor: 'all' });
        }
    }, [isEditEnabled]);

    return (
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
                    <Button onClick={hideEdit} type='ghost'>
                        X
                    </Button>
                </Space>
            </Space>
        </div>
    );
};
