import React,{Component} from 'react';
import style from './assets/css/loginhome.module.css';
import {Icon} from 'antd';
import {NavLink} from 'react-router-dom'

class LoginHome extends Component{
    render(){
        return (
            <div className={style.loginhome}>
                <div className={style['icon_user']}>
                    <Icon type="user" style={{ fontSize: '1.73rem', color: '#FFFFFF' }} />
                </div>
                <div className={style.wel}>Welcome</div>
                <div className={style.hi}>哈喽，欢迎来到宝宝的世界</div>
                <div className={style.reg}>
                    <NavLink to={'/reg'}>注册</NavLink>
                </div>
                <div className={style.log}>
                    <NavLink to={'/login'}>登录</NavLink>
                </div>
                <div className={style.help}>help?</div>
            </div>
        )
    }
}

export default LoginHome;