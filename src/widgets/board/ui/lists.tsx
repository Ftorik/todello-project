import React, { useState } from 'react';
import { listLib, listModel } from 'entities/list';
import { Space } from 'antd';
import { taskLib } from 'entities/task';
import { FeatureTodoList } from 'features/todo-list';

import { sortLists } from '../lib/sort';

type ListType = import('entities/list').listModel.types.ListType;

type TaskType = import('entities/task').taskModel.types.TaskType;

const initialTask = {
    id: '',
    title: '',
    isDone: false,
    listId: '',
};
const initialList = { id: '', order: 0, title: '' };

export function Lists() {
    const lists = listModel.selectors.useLists();
    const [startList, setStartList] = useState<ListType>(initialList);
    const [startTask, setStartTask] = useState<TaskType>(initialTask);

    const { swapLists } = listLib.useListActions();

    const { moveTaskToList } = taskLib.useTaskActions();

    const handleDragListStart = (e: React.DragEvent, list: ListType) => {
        // The user starts to drag an element
        const current = e.currentTarget as HTMLElement;

        setStartList(list);

        current.classList.add('active-list');
        current.style.border = '1px solid red';
    };
    const handleDragListLeave = (e: React.DragEvent) => {
        // A dragged element leaves the drop target
        const current = e.currentTarget as HTMLElement;

        current.style.background = 'rgb(235, 236, 240)';
    };
    const handleDragListEnd = (e: React.DragEvent) => {
        // The user has finished dragging an element
        const current = e.currentTarget as HTMLElement;

        current.classList.remove('active-list');
        current.style.border = '1px solid #d9d9d9';
        current.style.borderRadius = '8px';
    };

    const handleDragOver = (e: React.DragEvent) => {
        const current = e.currentTarget as HTMLElement;
        const active = document.querySelector('.active-list');
        const isMovable = active && current.classList.contains('list') && active !== current;

        if (isMovable) {
            e.preventDefault();
            current.style.background = 'lightgreen';
        }

        const activeTask = document.querySelector('.active-task');
        const isEmpty = current.querySelector('.tasks') && !current.querySelector('.task');

        if (activeTask && isEmpty) {
            e.preventDefault();
        }
    };
    const handleDragListDrop = (e: React.DragEvent, list: ListType) => {
        // A dragged element is dropped on the target
        e.preventDefault();

        const current = e.currentTarget as HTMLElement;

        current.style.background = 'rgb(235, 236, 240)';

        const activeList = document.querySelector('.active-list');

        if (startList.id !== list.id && activeList) {
            swapLists(startList, list);
        }

        const activeTask = document.querySelector('.active-task');
        const isEmpty = current.querySelector('.tasks') && !current.querySelector('.task');

        if (startTask && activeTask && isEmpty) {
            moveTaskToList(startTask.id, list.id);
        }
    };

    return (
        <Space align='start'>
            {lists.sort(sortLists).map((list) => (
                <FeatureTodoList
                    startList={startList}
                    startTask={startTask}
                    setStartTask={setStartTask}
                    key={list.id}
                    list={list}
                    draggable={true}
                    onDragStart={(e: React.DragEvent) => handleDragListStart(e, list)}
                    onDragLeave={handleDragListLeave}
                    onDragEnd={handleDragListEnd}
                    onDragOver={handleDragOver}
                    onDrop={(e: React.DragEvent) => handleDragListDrop(e, list)}
                />
            ))}
        </Space>
    );
}
