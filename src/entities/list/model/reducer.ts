import { uuid } from 'shared/lib';

import { ListAction, ListActionTypes, ListState } from './types';

const initialState: ListState = {
    lists: [
        {
            id: 'test_list_1',
            order: 1,
            title: 'Список дел на сегодня',
        },
        {
            id: 'test_list_2',
            order: 2,
            title: 'Выполненные',
        },
        {
            id: 'test_list_3',
            order: 3,
            title: 'Дела на будущее',
        },
    ],
    counter: 3,
};

export const listReducer = (state = initialState, action: ListAction) => {
    switch (action.type) {
        case ListActionTypes.CREATE_LIST:
            return {
                lists: [
                    ...state.lists,
                    {
                        id: uuid(action.payload),
                        order: state.counter + 1,
                        title: action.payload,
                    },
                ],
                counter: state.counter + 1,
            };
        case ListActionTypes.DELETE_LIST:
            return {
                ...state,
                lists: state.lists.filter((list) => list.id !== action.payload),
            };
        case ListActionTypes.SWAP_LISTS:
            return {
                ...state,
                lists: state.lists.map((list) => {
                    if (list.id === action.payload.old.id) {
                        return { ...list, order: action.payload.new.order };
                    }
                    if (list.id === action.payload.new.id) {
                        return { ...list, order: action.payload.old.order };
                    }

                    return list;
                }),
            };
        case ListActionTypes.SET_LIST_TITLE:
            return {
                ...state,
                lists: state.lists.map((list) => {
                    if (list.id === action.payload.listId) {
                        return { ...list, title: action.payload.title };
                    }

                    return list;
                }),
            };
        default:
            return state;
    }
};
