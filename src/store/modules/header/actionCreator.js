import {SEARCH_INPUT_FOCUS, SEARCH_INPUT_BLUR} from '../../actionTypes';

export const searchFocus = () => ({
    type: SEARCH_INPUT_FOCUS
})

export const searchBlur = () => ({
    type: SEARCH_INPUT_BLUR
})