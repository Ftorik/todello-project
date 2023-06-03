import React, { useEffect, useRef, useState } from 'react';
import { Input, InputRef } from 'antd';

import { useListActions } from '../../lib';

import classes from './styles.module.css';

type ListType = import('entities/list').listModel.types.ListType;

type ListTitleProps = {
    list: ListType;
};

export const ListTitle = ({ list }: ListTitleProps) => {
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState(list.title);
    const inputRef = useRef<InputRef>(null);
    const { setListTitle } = useListActions();

    const showInput = () => {
        setInputVisible(true);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const handleInputConfirm = () => {
        setInputVisible(false);
        if (inputValue.trim() && inputValue !== list.title) {
            setListTitle(list.id, inputValue);
        } else {
            setInputValue(list.title);
        }
    };

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus({ cursor: 'all' });
        }
    }, [inputVisible]);

    return (
        <div>
            {inputVisible ? (
                <Input
                    className={classes.font}
                    size='middle'
                    ref={inputRef}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                    type='text'
                />
            ) : (
                <div onClick={showInput} role='presentation' className={classes.font}>
                    {inputValue}
                </div>
            )}
        </div>
    );
};
