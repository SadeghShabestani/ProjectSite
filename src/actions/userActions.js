import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
} from '../constants/userConstants';
import axios from 'axios';

export const userLoginAction = (username, password) => async(dispatch) => {
    try {
        dispatch({// USER_LOGIN_REQUEST 
            type:USER_LOGIN_REQUEST,
        })
        
        const config = {// request setting
            header: {
                'Content-type':'application/json',
                // 'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU0NTM5ODQxLCJpYXQiOjE2NTQ1Mzg5NDEsImp0aSI6IjYzOGNhYjI1MmVjZDQwOGY5OGQ0OGRkNWFmMjRlMDAzIiwidXNlcl9pZCI6MX0.4MBpe-N1eLermKH-r5DxtDVT7uKBSBXUs8XY_5hsMoQ'
            }
        }
        const {data} = await axios.post(// send request login
            '/users/login/',
            {username:username, password:password},
            config,
        )

        dispatch({// USER_LOGIN_SUCCESS
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem(// save user infomation in local storage
            'userInfo',
            JSON.stringify(data)
        )

    } catch (error) {
        dispatch({// USER_LOGIN_FAIL
            type:USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}