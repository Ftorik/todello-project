export type UserType = {
    id: string;
    name: string;
    password: string;
};

export type UserState = UserType[];

export enum UserActionTypes {
    ADD_USER = 'ADD_USER',
    DELETE_USER = 'DELETE_USER',
}

interface AddUserAction {
    type: UserActionTypes.ADD_USER;
    payload: { name: string; password: string };
}

interface DeleteUserAction {
    type: UserActionTypes.DELETE_USER;
    payload: string;
}

export type UserAction = AddUserAction | DeleteUserAction;
