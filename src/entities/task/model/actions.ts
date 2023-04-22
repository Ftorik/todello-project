import { Dispatch } from 'redux';

import { TaskActionTypes } from './types';

export function addTask(listId: string, title: string) {
    return { type: TaskActionTypes.ADD_TASK, payload: { listId, title } };
}

export function deleteTask(taskId: string) {
    return { type: TaskActionTypes.DELETE_TASK, payload: taskId };
}

export function deleteTasksByListId(listId: string) {
    return { type: TaskActionTypes.DELETE_TASKS_BY_LIST_ID, payload: listId };
}

export function moveTaskToList(taskId: string, listId: string) {
    return { type: TaskActionTypes.MOVE_TASK_TO_LIST, payload: { taskId, listId } };
}

export function changeTaskName(taskId: string, title: string) {
    return function (dispatch: Dispatch) {
        dispatch({ type: TaskActionTypes.CHANGE_TASK_TITLE, payload: { taskId, title } });
    };
}
