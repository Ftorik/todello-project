import { uuid } from 'shared/lib';

import { UserAction, UserActionTypes, UserState } from './types';

const initialState: UserState = [
    { id: 'test_id_1', name: 'Borat', password: '123' },
    { id: 'test_id_2', name: 'Zohan', password: '321' },
];

export const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.ADD_USER:
            return [
                ...state,
                {
                    id: uuid(action.payload.name),
                    name: action.payload.name,
                    password: action.payload.password,
                },
            ];
        case UserActionTypes.DELETE_USER:
            return state.filter((user) => user.id !== action.payload);
        default:
            return state;
    }
};
