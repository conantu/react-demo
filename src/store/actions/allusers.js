import {GET_USERS} from "../types";

const allusers = ({url})=>{
    return dispatch=>{
        return fetch(url).then(res=>res.json()).then(
            data=>{
                dispatch({type:GET_USERS,payload:data})
                return data
            }
        )
    }
}

export default allusers;