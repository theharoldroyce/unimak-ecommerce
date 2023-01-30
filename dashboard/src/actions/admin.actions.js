import axios from "../helper/axios";
import { adminConstants } from "./constants"

export const signup  = (user) => {

    console.log(user)

    return async (dispatch) => {

        dispatch({ type: adminConstants.ADMIN_REGISTER_REQUEST });

        const res = await axios.post(`/admin/signup`, {
            ...user
        });

        if (res.status === 200) {
            const { message } = res.data;
            dispatch({
                type: adminConstants.ADMIN_REGISTER_SUCCESS,
                payload: {
                    message
                }
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: adminConstants.ADMIN_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }


    }
}