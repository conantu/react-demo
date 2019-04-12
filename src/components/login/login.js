import React,{Component} from 'react';
import style from './assets/css/login.module.css';
import {Icon} from 'antd';
import LogRegHeader from '../../common/log_reg_header/log_reg_header';
import connect from "react-redux/es/connect/connect";
import {CHECK_USER} from '../../store/types'
import {login} from '../../store/actions/login'
class Login extends Component{
    state={
        msg:'login',
        username:'',
        password:''
    }
    render(){
        return (
            <div className={style.login}>
                <LogRegHeader msg={this.state.msg}/>
                <div className={style['login_b']}>
                    <ul>
                        <li>
                            <div className={style['user_icon']}>
                                <Icon type='user' style={{ fontSize: '.24rem', color: '#716F6F' }} />
                            </div>
                            <input type="text" placeholder="用户名" value={this.state.username} name="username" onChange={this.mess.bind(this)}/>
                        </li>
                        <li>
                            <div className={style['user_icon']}>
                                <Icon type='lock' style={{ fontSize: '.24rem', color: '#716F6F' }} />
                            </div>
                            <input type="password" placeholder="密码" value={this.state.password} name="password" onChange={this.mess.bind(this)}/>
                        </li>
                    </ul>
                    <div className={style['login_logo']}>
                        <Icon type='wechat' style={{ fontSize: '.24rem', color: '#A6A6A6' }} />
                        <Icon type='qq' style={{ fontSize: '.24rem', color: '#A6A6A6' }} />
                        <Icon type="weibo-circle" style={{ fontSize: '.24rem', color: '#A6A6A6' }}/>
                    </div>
                </div>
                <div>
                    <input type="button" value="登录" className={style['login_btn']} onClick={()=>this.props.login(this,this.state.username,this.state.password)}/>
                </div>
            </div>
        )
    }
    mess(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    // login(){
    //     let url = `/api/userlogin?username=${this.state.username}&password=${this.state.password}`;
    //     if(this.state.username&&this.state.password){
    //         fetch(url).then(res=>res.json())
    //         .then(data=>{
    //             if(data.code=="0"){
    //                 alert('用户名或密码有错！');
    //             }else{
    //                 alert('成功，3秒后跳转到登录页面！')
    //                 setTimeout(()=>{
    //                     this.props.history.push('/user');
    //                 },3000)
    //                 console.log(data)
    //             }
    //         })
    //     }else{
    //         alert('请输入用户名或密码！')
    //     }
    // }
}

const initMapStateToProps=state=>({

});

const initMapDispatchToProps=dispatch=>({
    login:(_this,username,password)=>{
        // console.log(_this,username,password)
        dispatch(login({
            url:`/api/userlogin?username=${username}&password=${password}`,
        })).then(
            res=>{
                console.log(res)
                if(res.code === '1')  {
                    sessionStorage.setItem('login',JSON.stringify(res))
                    _this.props.history.push({pathname:'/user'})
                }
                res.code === '0' && alert('用户名或密码有错！');
            }
        )
    }
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Login)