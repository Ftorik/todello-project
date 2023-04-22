import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../model/actions';

export const useTaskActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(Actions, dispatch);
};
