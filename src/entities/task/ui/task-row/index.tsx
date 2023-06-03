import React, { PropsWithChildren } from 'react';

import classes from './styles.module.css';

type TaskType = import('entities/task').taskModel.types.TaskType;

export type TaskRowProps = PropsWithChildren<{
    task: TaskType;
    handeDragOverTask(e: React.DragEvent): void;
    handleDragEndTask(e: React.DragEvent): void;
    handleDragLeaveTask(e: React.DragEvent): void;
    handleDragStartTask(e: React.DragEvent, task: TaskType): void;
    handleDropTask(e: React.DragEvent, task: TaskType): void;
    deleteTask(taskId: string): void;
    modalTask(task: TaskType): void;
}>;

export const TaskRow = ({
    task,
    handeDragOverTask,
    handleDragEndTask,
    handleDragLeaveTask,
    handleDragStartTask,
    handleDropTask,
    deleteTask,
    modalTask,
}: TaskRowProps) => {
    if (!task) return null;

    return (
        <div
            draggable={true}
            onDragOver={handeDragOverTask}
            onDragStart={(e) => handleDragStartTask(e, task)}
            onDragEnd={handleDragEndTask}
            onDragLeave={handleDragLeaveTask}
            onDrop={(e) => handleDropTask(e, task)}
            onClick={() => modalTask(task)}
            key={task.id}
            className={`${classes.row} task`}
            role='presentation'
        >
            <div>{task.title}</div>
            <button type='button' onClick={() => deleteTask(task.id)} className={classes.button}>
                🗑️
            </button>
        </div>
    );
};
