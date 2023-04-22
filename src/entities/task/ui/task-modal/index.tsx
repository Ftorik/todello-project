import React from 'react';

type TaskType = import('entities/task').taskModel.types.TaskType;

interface ModalTaskProps {
    task: TaskType;
}

export const ModalTask = ({ task }: ModalTaskProps) => (
    <div>
        <p>Done: {task.isDone.toString()}</p>
        <p>Id: {task.id}</p>
        <p>List Id: {task.listId}</p>
        <p>Some contents...</p>
    </div>
);
