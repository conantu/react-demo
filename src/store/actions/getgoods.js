import {GET_GOODS, VIEW_LOADING} from "../types";

export const getgoods = ({url})=>dispatch=>{
    dispatch({type:VIEW_LOADING,payload: true})
    return fetch(url,{
        method:'POST'
    }).then(res=>res.json())
        .then(data=>{
            dispatch({type:GET_GOODS,payload:data})
            dispatch({type:VIEW_LOADING,payload:false})
            return data
        })
}