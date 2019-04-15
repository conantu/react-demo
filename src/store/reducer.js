
import {CHECK_USER, CLEAR_USER, GET_USERS, SEND_ID, SET_TYPE, VIEW_FOOTER} from "./types";
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
        case SET_TYPE:
            return {...state,type:payload}
        case SEND_ID:
            return {...state,id:payload.id,follow_id:payload.follow_id}
        default:
            return state;
    }
}

export default reducer;