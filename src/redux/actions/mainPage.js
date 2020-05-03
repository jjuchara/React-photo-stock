import {
    FETCH_LIST_PHOTOS,
    FETCH_MORE_PHOTOS,
    FETCH_PHOTO_BY_QUERY,
    FETCH_PHOTO_ERROR, FETCH_PHOTOS_END, FETCH_PHOTOS_START,
    ON_CHANGE_HANDLER, ON_CLICK_PHOTO_PAGE_TOGGLE, ON_CLOSE_BACKDROP
} from "./actionTypes";
import axios from 'axios';

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY

// const SECRET = process.env.REACT_APP_SECRET

export function fetchPhotoByQuery(e) {
    e.preventDefault()

    return async (dispatch, getState) => {

        dispatch(fetchPhotosStart())

        try {
            let data = getState().mainPage.data
            const query = getState().mainPage.value;
            const count = getState().mainPage.count;
            const oldValue = query;

            const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&query=${query}&count=${count}`);
            data = response.data;

            const value = '';
            const isSearch = true;

            dispatch({
                type: FETCH_PHOTO_BY_QUERY,
                data,
                value,
                isSearch,
                oldValue
            })

            dispatch(fetchPhotosEnd())

        } catch {
            dispatch(fetchPhotoError(e))
        }


    }
}

export function fetchListPhotos() {

    return async (dispatch, getState) => {
        dispatch(fetchPhotosStart())
        try {
            const count = getState().mainPage.count
            const page = getState().mainPage.page

            const response = await axios.get(`https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=${count}`)
            const data = response.data

            dispatch({
                type: FETCH_LIST_PHOTOS,
                data,
            })

        } catch (e) {
            dispatch(fetchPhotoError(e))
        }

        dispatch(fetchPhotosEnd())

    }

}

export function fetchMorePhotos() {

    return async (dispatch, getState) => {

        try {
            const photo = [ ...getState().mainPage.data ];
            const count = getState().mainPage.count;
            const oldValue = getState().mainPage.oldValue
            const isSearch = getState().mainPage.isSearch;
            let page = getState().mainPage.page;
            let url
            page++;

            if (isSearch) {

                url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&query=${oldValue}&count=${count}`
            } else {
                url = `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=${count}`
            }

            const response = await axios.get(url)
            const data = response.data

            photo.push(...data)


            dispatch({
                type: FETCH_MORE_PHOTOS,
                photo,
                page
            })

        } catch (e) {
            dispatch(fetchPhotoError(e))
        }

    }
}

export function fetchPhotoError(err) {
    return {
        type: FETCH_PHOTO_ERROR,
        error: err
    }
}

export function onChangeHandler(e) {

    return {
        type: ON_CHANGE_HANDLER,
        value: e.target.value
    }
}

export function fetchPhotosStart() {
    return {
        type: FETCH_PHOTOS_START
    }
}

export function fetchPhotosEnd() {
    return {
        type: FETCH_PHOTOS_END
    }
}

export function onClickPhotoPageToggle() {
    return {
        type: ON_CLICK_PHOTO_PAGE_TOGGLE
    }
}

export function onCloseBackdrop() {
    return {
        type: ON_CLOSE_BACKDROP
    }
}
