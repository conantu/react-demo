
import {
    CHECK_USER,
    CLEAR_USER,
    GET_DETAIL,
    GET_GOODS,
    GET_USERS,
    SEND_ID,
    SET_TYPE,
    VIEW_FOOTER,
    VIEW_LOADING
} from "./types";
const reducer = (state,{type,payload})=>{
    switch (type) {
        case VIEW_FOOTER:
            return {...state,bFoot:payload};
        case VIEW_LOADING:
            return {...state,bLoading:payload};
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
        case GET_GOODS:
            return {...state,goods:payload.GOODS}
        case GET_DETAIL:
            return {...state,detail:payload}
        default:
            return state;
    }
}

export default reducer;