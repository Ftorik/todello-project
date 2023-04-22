import { ListActionTypes, ListType } from './types';

export function addList(title: string) {
    return { type: ListActionTypes.CREATE_LIST, payload: title };
}

export function deleteList(listId: string) {
    return { type: ListActionTypes.DELETE_LIST, payload: listId };
}

export function swapLists(oldList: ListType, newList: ListType) {
    return { type: ListActionTypes.SWAP_LISTS, payload: { old: oldList, new: newList } };
}

export function setListTitle(listId: string, title: string) {
    return { type: ListActionTypes.SET_LIST_TITLE, payload: { listId, title } };
}
