import {GET_NEWS, VIEW_LOADING} from "../types";

export const getnews = ({url,data})=>{
    return dispatch =>{
        return fetch(`${url}?type=${data}`)
            .then(res=>res.json())
            .then(data=>{
                dispatch({type:GET_NEWS,payload:data})
                return data
            })
    }
}