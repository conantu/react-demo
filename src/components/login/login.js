import React,{Component} from 'react';
import style from './assets/css/login.module.css';
import {Icon} from 'antd';
import LogRegHeader from '../../common/log_reg_header/log_reg_header';

class Login extends Component{
    state={
        msg:'login'
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
                            <input type="text" placeholder="用户名" />
                        </li>
                        <li>
                            <div className={style['user_icon']}>
                                <Icon type='lock' style={{ fontSize: '.24rem', color: '#716F6F' }} />
                            </div>
                            <input type="text" placeholder="密码" />
                        </li>
                    </ul>
                    <div className={style['login_logo']}>
                        <Icon type='wechat' style={{ fontSize: '.24rem', color: '#A6A6A6' }} />
                        <Icon type='qq' style={{ fontSize: '.24rem', color: '#A6A6A6' }} />
                        <Icon type="weibo-circle" style={{ fontSize: '.24rem', color: '#A6A6A6' }}/>
                    </div>
                </div>
                <div>
                    <input type="button" value="登录" className={style['login_btn']}/>
                </div>
            </div>
        )
    }
}

export default Login