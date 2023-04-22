export type ListType = {
    id: string;
    order: number;
    title: string;
};

export type ListState = {
    lists: ListType[];
    counter: number;
};

export enum ListActionTypes {
    CREATE_LIST = 'CREATE_LIST',
    DELETE_LIST = 'DELETE_LIST',
    SWAP_LISTS = 'SWAP_LISTS',
    SET_LIST_TITLE = 'SET_LIST_TITLE',
}

interface CreateListAction {
    type: ListActionTypes.CREATE_LIST;
    payload: string;
}

interface DeleteListAction {
    type: ListActionTypes.DELETE_LIST;
    payload: string;
}

interface SwapListsAction {
    type: ListActionTypes.SWAP_LISTS;
    payload: { old: ListType; new: ListType };
}

interface SetListTitleAction {
    type: ListActionTypes.SET_LIST_TITLE;
    payload: { listId: string; title: string };
}

export type ListAction = CreateListAction | DeleteListAction | SwapListsAction | SetListTitleAction;
