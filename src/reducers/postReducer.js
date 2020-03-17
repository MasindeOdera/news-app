import { FETCH_POSTS } from '../actions/types';

const initialState = {
    // query: '',
    items: [],
    item: {},
    loading: false,

}

export default function (state = initialState, action) {
    // if (typeof state === 'undefined') {
    //     return initialState
    // }

    switch(action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload,
                // query: query,
                loading: false 
            };
        default:
            return state;
    }
}