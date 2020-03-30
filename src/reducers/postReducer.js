import { SHOW_NEWS, FETCH_NEWS, SEARCH_NEWS, FETCH_ARTICLE, LOADING } from '../actions/types';

const initialState = {
    query: '',
    items: [],
    item: {},
    article: [],
    loading: true,
    id: '',
}

export default function (state = initialState, action) {
    switch(action.type) {
        case SHOW_NEWS:
            return {
                ...state,
                items: action.payload,
                loading: false,
                id: state.items.id,
            };
        case FETCH_NEWS:
            return {
                ...state,
                items: action.payload,
                query: state.query,
                loading: false,
                id: state.items.id,
            };
        case FETCH_ARTICLE:
            return {
                ...state,
                article: action.payload,
                loading: false 
            };
        case SEARCH_NEWS:
            return {
                ...state,
                query: action.payload,
                loading: false 
            };
        case LOADING:
            return {
                ...state,
                loading: true 
            };
        default:
            return state;
    }
}