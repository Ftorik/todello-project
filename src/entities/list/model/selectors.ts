import { useTypedSelector } from 'shared/lib';

import { ListType } from './types';

export const useLists = () => useTypedSelector<ListType[]>((state) => state.lists.lists);
