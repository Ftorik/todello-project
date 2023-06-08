import React, { useState } from 'react';

import { ButtonList } from './button-list';
import { EditList } from './edit-list';

export const NewList = () => {
    const [isEditEnabled, setIsEditEnabled] = useState(false);
    const [isListAdded, setIsListAdded] = useState(false);
    const shouldScrollToRef = isListAdded && !isEditEnabled;

    const hideEdit = () => setIsEditEnabled(false);
    const showEdit = () => {
        setIsEditEnabled(true);
        setIsListAdded(false);
    };

    const buttonProps = { showEdit, shouldScrollToRef };
    const editProps = { isEditEnabled, hideEdit, setIsListAdded };

    return isEditEnabled ? (
        <EditList editProps={editProps} />
    ) : (
        <ButtonList buttonProps={buttonProps} />
    );
};
