import React, { useState } from 'react';
import { CreateTask } from 'entities/task';

import { TodoListFooterProps } from '../model/types';

import { EditFooter } from './edit-footer';

export const TodoListFooter = ({ addNewTask, deleteListAndTasks }: TodoListFooterProps) => {
    const [visible, setVisible] = useState(false);

    const taskProps = { visible, setVisible, addNewTask };
    const editProps = { setVisible, deleteListAndTasks };

    return visible ? <CreateTask taskProps={taskProps} /> : <EditFooter editProps={editProps} />;
};
