import React from 'react';

type ListType = import('entities/list').listModel.types.ListType;
type TaskType = import('entities/task').taskModel.types.TaskType;

export type TodoListProps = {
    style?: React.CSSProperties;
    list: ListType;
    draggable: boolean;
    startTask: TaskType;
    startList: ListType;

    setStartTask(task: TaskType): void;

    onDragStart(e: React.DragEvent, list?: ListType): void;

    onDragLeave(e: React.DragEvent): void;

    onDragEnd(e: React.DragEvent): void;

    onDragOver(e: React.DragEvent): void;

    onDrop(e: React.DragEvent, list?: ListType): void;
};

export type EditProps = {
    editProps: {
        setVisible(visible: boolean): void;
        deleteListAndTasks(): void;
    };
};

export type TodoListFooterProps = {
    addNewTask(title: string): void;

    deleteListAndTasks(): void;
};
