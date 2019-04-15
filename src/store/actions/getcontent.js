import {GET_CONTENT} from "../types";

export const getcontent = ({url,id})=>dispatch =>{
    console.log(url,id)
    return fetch(`${url}?id=${id}`)
        .then(res=>res.json())
        .then(data=>{
            dispatch({type:GET_CONTENT,payload:data})
            return data
        })
}