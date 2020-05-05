import { SHOW_NEWS, FETCH_NEWS, SEARCH_NEWS, FETCH_ARTICLE, LOADING, ASSIGN_ID, UPDATE_ARTICLES, FETCH_QUERY } from '../actions/types';

const initialState = {
    query: '',
    items: [],
    item: {},
    article: [],
    loading: true,
    id: [],
}

export default function (state = initialState, action) {
    switch(action.type) {
        case SHOW_NEWS:
            return {
                ...state,
                items: action.payload,
                loading: false,
                id: state.id
            };
        case FETCH_NEWS:
            return {
                ...state,
                items: action.payload,
                query: state.query,
                loading: false,
                id: state.id
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
        case ASSIGN_ID:
            return {
                ...state,
                id: action.payload,
                loading: false,
            };
        case UPDATE_ARTICLES:
            return {
                ...state,
                items: action.payload,
                loading: false 
            };
        case FETCH_QUERY:
            return {
                ...state,
                query: action.payload
            };
        default:
            return state;
    }
}