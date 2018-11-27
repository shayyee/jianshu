import {
    SEARCH_INPUT_FOCUS,
    SEARCH_INPUT_BLUR
} from '../../actionTypes';
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, actions) => {
    if(actions.type === SEARCH_INPUT_FOCUS) {
        return state.set('focused', true)
    }
    if(actions.type === SEARCH_INPUT_BLUR) {
        return state.set('focused', false)
    }
    return state;
}