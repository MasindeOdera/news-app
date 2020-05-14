import { FETCH_NEWS, SEARCH_NEWS, FETCH_ARTICLE, LOADING, ASSIGN_ID, FETCH_QUERY, UPDATE_TOTAL_COUNT, SET_CURRENT_PAGE } from '../actions/types';

const initialState = {
    query: '',
    items: [],
    error: '',
    totalResults: '',
    item: {},
    article: [],
    loading: false,
    id: [],
    totalCount: 0,
    totalPages: 0,
    currentPage: 1,
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_NEWS:
            return {
                ...state,
                items: action.payload,
                error: action.error.status,
                totalResults: action.error.totalResults,
                query: state.query,
                currentPage: state.currentPage,
                loading: false,
                id: state.id,
            };
        case FETCH_ARTICLE:
            return {
                ...state,
                article: action.payload,
                loading: false,
            };
        case SEARCH_NEWS:
            return {
                ...state,
                query: action.payload,
                loading: false,
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case ASSIGN_ID:
            return {
                ...state,
                id: action.payload,
                loading: false,
            };
        case FETCH_QUERY:
            return {
                ...state,
                query: action.payload,
            };
            case UPDATE_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
}