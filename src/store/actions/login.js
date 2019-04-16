import {CHECK_USER} from "../types";

export const login = ({url}) => dispatch=>{
    // baseUrl = https://uncle9.top
    // url /api/login
    // 必选body username=xx password=xx

    return fetch(
        url,
        {
            method:'GET'
        }
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:CHECK_USER,payload:data});
            return {code:data.code, msg:data.msg};
        }
    );
};

