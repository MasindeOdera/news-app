import { SHOW_NEWS, FETCH_NEWS, SEARCH_NEWS } from '../actions/types';

const initialState = {
    query: '',
    items: [],
    item: {},
    loading: true,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case SHOW_NEWS:
            return {
                ...state,
                items: action.payload,
                loading: false 
            };
        case FETCH_NEWS:
            return {
                ...state,
                items: state.items,
                query: state.query,
                loading: false 
            };
        case SEARCH_NEWS:
            return {
                ...state,
                query: action.payload,
                loading: false 
            };
        default:
            return state;
    }
}