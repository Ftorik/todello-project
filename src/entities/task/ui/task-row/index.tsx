import React, { PropsWithChildren } from 'react';

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
            className='task'
            draggable={true}
            onDragOver={handeDragOverTask}
            onDragStart={(e) => handleDragStartTask(e, task)}
            onDragEnd={handleDragEndTask}
            onDragLeave={handleDragLeaveTask}
            onDrop={(e) => handleDropTask(e, task)}
            onClick={() => modalTask(task)}
            key={task.id}
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 10,
            }}
            role='presentation'
        >
            <div>{task.title}</div>
            <button
                type='button'
                onClick={() => deleteTask(task.id)}
                style={{
                    marginLeft: 25,
                    cursor: 'pointer',
                    backgroundColor: 'rgba(255,0,0,0.2)',
                    border: '1px solid gray',
                }}
            >
                🗑️
            </button>
        </div>
    );
};
