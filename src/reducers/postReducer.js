import { FETCH_NEWS, SEARCH_NEWS } from '../actions/types';

const initialState = {
    query: '',
    items: [],
    item: {},
    loading: false,

}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                items: action.payload,
                loading: false 
            };
        case SEARCH_NEWS:
            return {
                ...state,
                // items: action.payload,
                query: action.payload,
                loading: false 
            };
        default:
            return state;
    }
}