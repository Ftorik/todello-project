export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
    listId: string;
};

export type TaskState = {
    tasks: TaskType[];
    counter: number;
};

export enum TaskActionTypes {
    ADD_TASK = 'ADD_TASK',
    DELETE_TASK = 'DELETE_TASK',
    CHANGE_TASK_TITLE = 'CHANGE_TASK_TITLE',
    CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS',
    DELETE_TASKS_BY_LIST_ID = 'DELETE_TASKS_BY_LIST_ID',
    MOVE_TASK_TO_LIST = 'MOVE_TASK_TO_LIST',
}

interface MoveTaskAction {
    type: TaskActionTypes.MOVE_TASK_TO_LIST;
    payload: {
        taskId: string;
        listId: string;
    };
}

interface AddTaskAction {
    type: TaskActionTypes.ADD_TASK;
    payload: {
        title: string;
        listId: string;
    };
}

interface DeleteTaskAction {
    type: TaskActionTypes.DELETE_TASK;
    payload: string;
}

interface DeleteTaskByListIdAction {
    type: TaskActionTypes.DELETE_TASKS_BY_LIST_ID;
    payload: string;
}

interface ChangeTaskTitleAction {
    type: TaskActionTypes.CHANGE_TASK_TITLE;
    payload: { taskId: string; title: string };
}

interface ChangeTaskStatusAction {
    type: TaskActionTypes.CHANGE_TASK_STATUS;
    payload: string;
}

export type TaskAction =
    | AddTaskAction
    | DeleteTaskAction
    | ChangeTaskTitleAction
    | ChangeTaskStatusAction
    | DeleteTaskByListIdAction
    | MoveTaskAction;
