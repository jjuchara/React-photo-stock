import {
    FETCH_LIST_PHOTOS,
    FETCH_MORE_PHOTOS,
    FETCH_PHOTO_BY_QUERY,
    FETCH_PHOTO_ERROR, FETCH_PHOTOS_END, FETCH_PHOTOS_START,
    ON_CHANGE_HANDLER, ON_CLICK_PHOTO_PAGE_TOGGLE, ON_CLOSE_BACKDROP
} from "../actions/actionTypes";

const initialState = {
    value: '',
    data: [],
    count: 10,
    page: 1,
    isSearch: false,
    oldValue: '',
    loading: false,
    isOpen: false
};

export default function mainPageReducer(state = initialState, action) {
    switch (action.type) {
        case ON_CLOSE_BACKDROP:
            return {
                ...state,
                isOpen: false
            }
        case ON_CLICK_PHOTO_PAGE_TOGGLE:
            return {
                ...state,
                isOpen: true
            }
        case FETCH_PHOTOS_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_PHOTOS_END:
            return {
                ...state,
                loading: false
            }
        case FETCH_PHOTO_BY_QUERY:
            return {
                ...state,
                data: action.data,
                value: action.value,
                isSearch: action.isSearch,
                oldValue: action.oldValue
            }
        case FETCH_MORE_PHOTOS:
            return {
                ...state,
                data: action.photo,
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