import React,{Component} from 'react';
import style from './assets/css/log_reg_header.module.css';
import {NavLink} from 'react-router-dom'
class LogRegHeader extends Component{
    render(){
        return (
            <div className={style.login_reg_header}>
                <div className={style['login_t']}>
                    <p className={style.logo}>
                        <NavLink to={'/home'}>时光记Logo</NavLink>
                    </p>
                    <p className={this.props.msg =='login'?style.active:''}>
                        <NavLink to={'/login'}>登录</NavLink>
                    </p>
                    <p className={this.props.msg =='reg'?style.active:''}>
                        <NavLink to={'/reg'}>注册</NavLink>
                    </p>
                </div>
            </div>
        )
    }
}

export default LogRegHeader