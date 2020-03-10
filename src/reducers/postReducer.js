import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    search: '',
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log("In postReducers.js before return state: ", {...state});
            return {
                ...state,
                items: action.payload,
                // search: action.payload.filter()
            };
            // return Object.assign({}, ...state, {
            //     search: action.payload
            // });
        case NEW_POST:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}