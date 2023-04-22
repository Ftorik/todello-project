import React, { useEffect, useMemo, useState } from 'react';
import { Space } from 'antd';
import { listLib, listModel } from 'entities/list';
import { taskLib } from 'entities/task';
import FeatureTodoList from 'features/todo-list';
import { AddNewList } from 'entities/list/ui/new-list';

type ListType = import('entities/list').listModel.types.ListType;

type TaskType = import('entities/task').taskModel.types.TaskType;

export function Board() {
    const lists = listModel.selectors.useLists();
    const [startList, setStartList] = useState<ListType>({ id: '', order: 0, title: '' });
    const [startTask, setStartTask] = useState<TaskType>({
        id: '',
        title: '',
        isDone: false,
        listId: '',
    });

    const useLists = (listsArr: ListType[]) => {
        const [tmpLists, setTmpLists] = useState<ListType[]>([]);

        const memLists = useMemo(() => listsArr, [listsArr]);

        useEffect(() => {
            setTmpLists(memLists);
        }, [memLists]);

        return tmpLists;
    };

    const stateLists = useLists(lists);

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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleDragOver = (e: React.DragEvent) => {
        const current = e.currentTarget as HTMLElement;
        const active = document.querySelector('.active-list');
        const isMovable = active && current.classList.contains('list-header') && active !== current;

        // https://stackoverflow.com/questions/3753634/check-if-an-element-is-a-child-of-a-parent
        // const isChildOfParent = (e.target as Element).matches('.ant-card-head :scope');
        // const isChildOfParent = (e.target as Element).matches('.ant-list-header:scope');

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

    const sortLists = (a: ListType, b: ListType) => {
        if (a.order > b.order) {
            return 1;
        }

        return -1;
    };

    return (
        <Space align='start' size='large' style={{ display: 'flex' }}>
            {stateLists.sort(sortLists).map((list) => (
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
            <AddNewList />
        </Space>
    );
}
