
import {CHECK_USER, CLEAR_USER, GET_USERS, VIEW_FOOTER} from "./types";
const reducer = (state,{type,payload})=>{
    switch (type) {
        case VIEW_FOOTER:
            return {...state,bFoot:payload};
        case CHECK_USER:
            return {...state,user:payload};
        case CLEAR_USER:
            return {...state,user:{}};
        case GET_USERS:
            return {...state,allusers:payload}
        default:
            return state;
    }
}

export default reducer;