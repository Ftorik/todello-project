import React, { useEffect, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import classes from './styles.module.css';

export type ButtonListType = {
    buttonProps: {
        showEdit: () => void;
        shouldScrollToRef: boolean;
    };
};

export const ButtonList = ({ buttonProps }: ButtonListType) => {
    const { showEdit, shouldScrollToRef } = buttonProps;
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (shouldScrollToRef) {
            scrollRef.current?.scrollIntoView();
        }
    }, [shouldScrollToRef]);

    return (
        <Button
            ref={scrollRef}
            icon={<PlusOutlined />}
            className={classes.button}
            onClick={showEdit}
        >
            Добавить еще одну колонку
        </Button>
    );
};
