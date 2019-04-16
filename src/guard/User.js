import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";


const AuthUser = ({component:Component,user,...rest}) => (
    <Route {...rest} render={(props)=>(
        user.code === '1' || sessionStorage.getItem('login') ?
            <Component {...props} data={user.msg}/> :
            <Redirect to="/login" />
    )}/>
);


const initMapStateToProps=state=>({
    user:state.user,
});

const initMapDispatchToProps=dispatch=>({
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(AuthUser)