import React, { useState } from 'react';
import { CreateTask } from 'entities/task';

import { EditFooter } from './edit-footer';

interface TodoListFooterProps {
    addNewTask(title: string): void;

    deleteListAndTasks(): void;
}

export function TodoListFooter(props: TodoListFooterProps) {
    const [visible, setVisible] = useState(false);

    const taskProps = { visible, setVisible, addNewTask: props.addNewTask };
    const editProps = { setVisible, deleteListAndTasks: props.deleteListAndTasks };

    return visible ? <CreateTask taskProps={taskProps} /> : <EditFooter editProps={editProps} />;
}
