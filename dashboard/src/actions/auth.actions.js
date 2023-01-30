import axios from "../helper/axios";
import { authConstants } from "./constants"

export const login = (user) => {

    console.log(user)

    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });

        const res = await axios.post('/admin/signin', {
            ...user
        });

        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }


    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: { error: 'Failed to Login' }
            });
        }
    }
}


export const signout = () => {
    return async dispatch => {

        dispatch({ type: authConstants.LOGOUT_REQUEST });

        const res = await axios.post(`/admin/signout`, {
            refresh_token: localStorage.getItem('refresh_token'),
        });

        if (res.status === 200) {
            localStorage.removeItem('token');
            localStorage.removeItem('refresh_token');
            dispatch({ type: authConstants.LOGOUT_SUCCESS });
        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                paylaod: { error: res.data.error }
            });
        }


    }
}

// export const signup = (user) => {

//     console.log(user)

//     return async (dispatch) => {

//         dispatch({ type: authConstants.LOGIN_REQUEST });

//         const res = await axios.post(`/admin/signup`, {
//             ...user
//         });

//         if (res.status === 200) {
//             const { message} = res.data;
//             dispatch({
//                 type: authConstants.LOGIN_SUCCESS,
//                 payload: {
//                     message
//                 }
//             });
//         } else {
//             if (res.status === 400) {
//                 dispatch({
//                     type: authConstants.LOGIN_FAILURE,
//                     payload: { error: res.data.error }
//                 });
//             }
//         }


//     }
// }
