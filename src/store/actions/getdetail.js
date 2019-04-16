import {GET_DETAIL, VIEW_LOADING} from "../types";

export const getdetail = ({url})=>dispatch=>{
    dispatch({type:VIEW_LOADING,payload: true})
    return fetch(url).then(res=>res.json())
        .then(data=>{
            dispatch({type:GET_DETAIL,payload:data.good})
            dispatch({type:VIEW_LOADING,payload:false})
            return data;
        })
}