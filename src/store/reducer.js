import { combineReducers } from 'redux';

import headerReducer from './modules/headerReducer';

const reducer = combineReducers({
    header: headerReducer
})
export default reducer;