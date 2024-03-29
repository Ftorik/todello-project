import React, { PropsWithChildren } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';

import { modalTask } from '../../lib';

import classes from './styles.module.css';

type TaskType = import('entities/task').taskModel.types.TaskType;

export type TaskCardProps = PropsWithChildren<{
    task: TaskType;
    handleDragEndTask(e: React.DragEvent): void;
    handleDragLeaveTask(e: React.DragEvent): void;
    handleDragStartTask(e: React.DragEvent, task: TaskType): void;
    deleteTask(taskId: string): void;
}>;

export const TaskCard = ({
    task,
    handleDragEndTask,
    handleDragLeaveTask,
    handleDragStartTask,
    deleteTask,
}: TaskCardProps) => {
    if (!task) return null;

    return (
        <Card
            className={`${classes.card} task`}
            draggable={true}
            onDragStart={(e) => handleDragStartTask(e, task)}
            onDragEnd={handleDragEndTask}
            onDragLeave={handleDragLeaveTask}
            onClick={() => modalTask(task)}
            key={task.id}
            bodyStyle={{ padding: 5 }}
            role='presentation'
        >
            <div className={classes.title}>{task.title}</div>
            <span
                className={classes.edit}
                role='presentation'
                onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(task.id);
                }}
            >
                <EditOutlined />
            </span>
        </Card>
    );
};
