import {
    SEARCH_INPUT_FOCUS,
    SEARCH_INPUT_BLUR
} from '../actionTypes';

const defaultState = {
    focused: false
};

export default (state = defaultState, actions) => {
    if(actions.type === SEARCH_INPUT_FOCUS) {
        return {
            focused: true
        }
    }
    if(actions.type === SEARCH_INPUT_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}