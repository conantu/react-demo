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

class App extends Component {
    render(){
        return (
            <>
                <Switch>
                    <Route path={'/home'} component={Home}></Route>
                    <Route path={'/life'} component={Life}></Route>
                    <Route path={'/time'} component={Time}></Route>
                    <Route path={'/message'} component={Message}></Route>
                    <Route path={'/user'} component={User}></Route>
                    <Route path={'/login'} component={Login}></Route>
                    <Route path={'/reg'} component={Register}></Route>
                    <Route path={'/loginhome'} component={LoginHome}></Route>
                    <Route path={'/youpin'} component={YouPin}></Route>
                    <Redirect exact from={'/'} to={'/home'}></Redirect>
                    <Route component={Error}></Route>
                </Switch>
                <Footer/>
            </>
        )
    }
}

export default App;