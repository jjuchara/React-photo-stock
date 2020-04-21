import {
    FETCH_LIST_PHOTOS,
    FETCH_MORE_PHOTOS,
    FETCH_PHOTO_BY_QUERY,
    FETCH_PHOTO_ERROR,
    ON_CHANGE_HANDLER
} from "./actionTypes";
import axios from 'axios';

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY

// const SECRET = process.env.REACT_APP_SECRET


export function fetchPhotoByQuery(e) {
    e.preventDefault()

    return async (dispatch, getState) => {
        try {
            const query = getState().mainPage.value;
            const count = getState().mainPage.count;
            const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&query=${query}&count=${count}`);
            const data = response.data;

            const value = '';

            dispatch({
                type: FETCH_PHOTO_BY_QUERY,
                data,
                value
            })

        } catch {
            dispatch(fetchPhotoError(e))
        }


    }
}

export function fetchListPhotos() {

    return async (dispatch, getState) => {

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


    }

}

export function fetchMorePhotos() {

    return async (dispatch, getState) => {

        try {
            const photo = [ ...getState().mainPage.data ];
            const count = getState().mainPage.count;
            let page = getState().mainPage.page
            page++
            console.log(page)

            const response = await axios.get(`https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=${count}`)
            const data = response.data

            photo.push(...data)

            console.log('push',photo)

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
