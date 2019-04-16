import React,{Component} from 'react'
import Footer from "./common/footer/footer";
import Home from "./components/home/home";
import Life from "./components/life/life";
import Time from "./components/time/time";
import Message from "./components/message/message";
import User from "./components/user/user";
import {Route,Switch,Redirect} from 'react-router-dom'
import Header from "./common/header/header";
import YouPin from "./components/youpin/youpin";
import Error from "./components/error/error";
import Login from "./components/login/login";
import LoginHome from "./components/loginhome/loginhome";
import Register from "./components/register/register";
import Need from "./components/need/need";
import AfterFollow from "./components/afterfollow/afterfollow";
import Community from "./components/community/community";
import Detail from "./components/detail/detail";
import TypeMore from "./components/typemore/typemore";
import Car from "./components/car/car";
import {connect} from 'react-redux'
import {VIEW_FOOTER} from './store/types'
import AuthUser from "./guard/User";
import JoinCar from "./components/joincar/joincar";


class App extends Component {
    componentWillReceiveProps(nextProps){//路由监听
        let {viewFoot} = this.props;
        let path = nextProps.location.pathname;
        if(/home|life|time|message|user|afterfollow/.test(path)){
            viewFoot(true)
        }
        if(/login|loginhome|register|car|youpin|need|typemore|detail|community|joincar/.test(path)){
            viewFoot(false)
        }
    }
    render(){
        let {bFoot} = this.props;
        return (
            <>
                <Switch>
                    <Route path={'/home'} component={Home}></Route>
                    {/*<Route path={'/life'} component={Life}></Route>*/}
                    <AuthUser path={'/life'} component={Life}></AuthUser>
                    <Route path={'/time'} component={Time}></Route>
                    <Route path={'/message'} component={Message}></Route>
                    {/*<Route path={'/user'} component={User}></Route>*/}
                    <AuthUser path={'/user'} component={User}></AuthUser>
                    <Route path={'/login'} component={Login}></Route>
                    <Route path={'/reg'} component={Register}></Route>
                    <Route path={'/loginhome'} component={LoginHome}></Route>
                    <Route path={'/youpin'} component={YouPin}></Route>
                    <Route path={'/need'} component={Need}></Route>
                    <Route path={'/afterfollow'} component={AfterFollow}></Route>
                    <Route path={'/community'} component={Community}></Route>
                    <Route path={'/detail/:id'} component={Detail}></Route>
                    <Route path={'/typemore'} component={TypeMore}></Route>
                    <Route path={'/car'} component={Car}></Route>
                    <Route path={'/joincar'} component={JoinCar}></Route>
                    <Redirect exact from={'/'} to={'/home'}></Redirect>
                    <Route component={Error}></Route>
                </Switch>
                {bFoot&&<Footer/>}
            </>
        )
    }
}

const initMapStateToProps=(state)=>({
    bFoot:state.bFoot
});

const initMapDispatchToProps=dispatch=>({
    viewFoot:(bl)=>dispatch({type:VIEW_FOOTER,payload:bl})
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(App)