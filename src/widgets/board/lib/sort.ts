type ListType = import('entities/list').listModel.types.ListType;

export const sortLists = (a: ListType, b: ListType) => {
    if (a.order > b.order) {
        return 1;
    }

    return -1;
};
