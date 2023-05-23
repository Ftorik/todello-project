import React from 'react';
import { List } from 'antd';
import { listLib, ListTitle } from 'entities/list';
import { TaskCard, taskLib, taskModel } from 'entities/task';

import { TodoListProps } from '../model/types';

import { TodoListFooter } from './todo-list-footer';

type TaskType = import('entities/task').taskModel.types.TaskType;

export const FeatureTodoList = ({
    list,
    setStartTask,
    startTask,
    startList,
    ...props
}: TodoListProps) => {
    const tasks = taskModel.selectors.useTasksByListId(list.id);
    const { deleteList } = listLib.useListActions();
    const { addTask, deleteTask, deleteTasksByListId, moveTaskToList } = taskLib.useTaskActions();

    const addNewTask = (title: string) => {
        addTask(list.id, title);
    };
    const deleteListAndTasks = () => {
        deleteList(list.id);
        deleteTasksByListId(list.id);
    };

    const handleDragStartTask = (e: React.DragEvent, task: TaskType) => {
        e.stopPropagation();
        setStartTask(task);
        const current = e.currentTarget as HTMLElement;

        current.classList.add('active-task');
        current.style.border = '1px solid red';
    };
    const handleDragEndTask = (e: React.DragEvent) => {
        const current = e.currentTarget as HTMLElement;

        current.classList.remove('active-task');
        current.style.border = 'none';
    };
    const handleDragLeaveTask = (e: React.DragEvent) => {
        const current = e.currentTarget as HTMLElement;

        current.style.background = 'white';
    };
    const overTasksContainer = (e: React.DragEvent) => {
        const currentParent = e.currentTarget as HTMLElement;
        const active = document.querySelector('.active-task');
        const isMovable = active && currentParent.classList.contains('tasks');

        if (isMovable) {
            e.preventDefault();
        }
    };
    const dropOnTasksContainer = (e: React.DragEvent, task: TaskType) => {
        e.preventDefault();
        const activeList = document.querySelector('.active-list');
        const activeTask = document.querySelector('.active-task');

        if (activeTask && !activeList) {
            moveTaskToList(task.id, list.id);
        }
    };

    return (
        <List
            {...props}
            split={false}
            className='list-header'
            header={<ListTitle list={list} />}
            bordered={true}
            footer={
                <TodoListFooter addNewTask={addNewTask} deleteListAndTasks={deleteListAndTasks} />
            }
            style={{
                width: 305,
                cursor: 'grab',
                backgroundColor: '#ebecf0',
                overflowY: 'auto',
                maxHeight: 730,
            }}
        >
            <div
                className='tasks'
                onDragOver={overTasksContainer}
                onDrop={(e) => dropOnTasksContainer(e, startTask)}
            >
                {tasks.map((task) => (
                    <List.Item key={task.id}>
                        <TaskCard
                            task={task}
                            handleDragEndTask={handleDragEndTask}
                            handleDragLeaveTask={handleDragLeaveTask}
                            handleDragStartTask={handleDragStartTask}
                            deleteTask={deleteTask}
                        />
                    </List.Item>
                ))}
            </div>
        </List>
    );
};
