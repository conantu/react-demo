import {GET_NEWS} from "../types";

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