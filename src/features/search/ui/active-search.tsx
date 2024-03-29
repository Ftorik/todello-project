import React, { useEffect, useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input, InputRef } from 'antd';
import type { SelectProps } from 'antd/es/select';
import { taskLib, taskModel } from 'entities/task';

import type { ActiveSearchProps } from '../model/types';

import classes from './styles.module.css';

type TmpType = { task: import('entities/task').taskModel.types.TaskType };

const NoResult = () => <div>No result found</div>;

const TmpResult = ({ task }: TmpType) => (
    <div>
        Found: {task.title} in {task.listId}
    </div>
);

export const ActiveSearch = ({ visible, setVisible }: ActiveSearchProps) => {
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);

    const tasks = taskModel.selectors.useTasks();

    const findTask = (query: string) => {
        if (query.length < 2) {
            return [{ value: 'empty', label: <NoResult /> }];
        }

        const foundTasks = tasks
            .filter((t) => t.title.toLowerCase().includes(query.toLowerCase()))
            .map((task) => ({ value: task.id, label: <TmpResult task={task} /> }));

        if (!foundTasks.length) {
            return [{ value: 'empty', label: <NoResult /> }];
        }

        return foundTasks;
    };

    const handleSearch = (value: string) => {
        setInputValue(value);
        setOptions(value ? findTask(value) : []);
    };

    const onSelect = (taskId: string) => {
        const task = tasks.filter((e) => e.id === taskId)[0];

        taskLib.modalTask(task);
        setOptions([]);
        setInputValue('');
        setVisible(false);
    };

    useEffect(() => {
        if (visible) {
            inputRef.current?.focus({ cursor: 'start' });
        }
    }, [visible]);

    return (
        <AutoComplete
            className={classes.active}
            options={options}
            value={inputValue}
            onSelect={onSelect}
            onSearch={handleSearch}
            onBlur={() => setVisible(false)}
        >
            <Input
                ref={inputRef}
                size='middle'
                placeholder='Поиск в todello'
                prefix={<SearchOutlined />}
            />
        </AutoComplete>
    );
};
