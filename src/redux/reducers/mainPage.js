import {
    FETCH_LIST_PHOTOS,
    FETCH_MORE_PHOTOS,
    FETCH_PHOTO_BY_QUERY,
    FETCH_PHOTO_ERROR,
    ON_CHANGE_HANDLER
} from "../actions/actionTypes";

const initialState = {
    value: '',
    data: [],
    count: 10,
    page: 1
};

export default function mainPageReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PHOTO_BY_QUERY:
            return {
                ...state,
                data: action.data,
                value:action.value
            }
        case FETCH_MORE_PHOTOS:
            return {
                ...state,
                data: action.newPhoto,
                page: action.page
            }
        case FETCH_LIST_PHOTOS:
            return {
                ...state,
                data: action.data
            }
        case ON_CHANGE_HANDLER:
            return {
                ...state,
                value: action.value
            }
        case FETCH_PHOTO_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return {
                ...state
            }
    }
}