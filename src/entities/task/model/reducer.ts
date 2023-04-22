import { uuid } from 'shared/lib';

import { TaskAction, TaskActionTypes, TaskState } from './types';

const initialState: TaskState = {
    tasks: [
        { id: 'my_task_1', title: 'Покормить Плотву', isDone: true, listId: 'test_list_1' },
        {
            id: 'my_task_2',
            title: 'Получить звонкую монету',
            isDone: true,
            listId: 'test_list_1',
        },
        { id: 'my_task_3', title: 'Найти вербену', isDone: false, listId: 'test_list_1' },
        { id: 'my_task_4', title: 'Убить Бруксу', isDone: false, listId: 'test_list_2' },
        { id: 'my_task_5', title: 'Спасти Лютика', isDone: false, listId: 'test_list_2' },
        { id: 'my_task_6', title: 'Приготовить эликсиры', isDone: true, listId: 'test_list_2' },
        { id: 'my_task_7', title: 'Найти Цири', isDone: true, listId: 'test_list_3' },
        { id: 'my_task_8', title: 'Встретиться с Йеннифер', isDone: true, listId: 'test_list_3' },
        {
            id: 'my_task_9',
            title: 'Узнать как дела у Золтана',
            isDone: false,
            listId: 'test_list_3',
        },
    ],
    counter: 9,
};

export const taskReducer = (state = initialState, action: TaskAction) => {
    switch (action.type) {
        case TaskActionTypes.ADD_TASK:
            return {
                tasks: [
                    ...state.tasks,
                    {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        id: uuid(action.payload.title),
                        title: action.payload.title,
                        isDone: false,
                        listId: action.payload.listId,
                        order: state.counter + 1,
                    },
                ],
                counter: state.counter + 1,
            };
        case TaskActionTypes.DELETE_TASK:
            return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
        case TaskActionTypes.DELETE_TASKS_BY_LIST_ID:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.listId !== action.payload),
            };
        case TaskActionTypes.MOVE_TASK_TO_LIST:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.taskId) {
                        return { ...task, listId: action.payload.listId };
                    }

                    return task;
                }),
            };
        case TaskActionTypes.CHANGE_TASK_TITLE:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.taskId) {
                        return { ...task, title: action.payload.title };
                    }

                    return task;
                }),
            };
        default:
            return state;
    }
};
