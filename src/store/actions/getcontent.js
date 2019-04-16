import {GET_CONTENT, VIEW_LOADING} from "../types";

export const getcontent = ({url,id})=>dispatch =>{
    console.log(url,id)
    dispatch({type:VIEW_LOADING,payload: true})
    return fetch(`${url}?id=${id}`)
        .then(res=>res.json())
        .then(data=>{
            dispatch({type:GET_CONTENT,payload:data})
            dispatch({type:VIEW_LOADING,payload: false})
            return data
        })
}