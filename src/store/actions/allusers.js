import {GET_USERS, VIEW_LOADING} from "../types";

const allusers = ({url})=>{
    return dispatch=>{
        dispatch({type:VIEW_LOADING,payload: true})
        return fetch(url).then(res=>res.json()).then(
            data=>{
                dispatch({type:GET_USERS,payload:data})
                dispatch({type:VIEW_LOADING,payload: false})
                return data
            }
        )
    }
}

export default allusers;