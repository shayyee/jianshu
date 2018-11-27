import { combineReducers } from 'redux-immutable';

import headerReducer from './modules/header/headerReducer';

const reducer = combineReducers({
    header: headerReducer
})
export default reducer;