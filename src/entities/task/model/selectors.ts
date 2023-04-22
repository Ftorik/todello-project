import { useTypedSelector } from 'shared/lib';

import { TaskType } from './types';

export const useTasks = () => useTypedSelector<TaskType[]>((state) => state.tasks.tasks);

export const useTasksByListId = (listId: string) =>
    useTypedSelector<TaskType[]>((state) =>
        state.tasks.tasks.filter((task) => task.listId === listId),
    );
