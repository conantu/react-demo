import React,{Component} from 'react';
import style from './assets/css/register.module.css';
import LogRegHeader from '../../common/log_reg_header/log_reg_header';
import {Icon} from 'antd';

class Register extends Component{
    state={
        msg:'reg'
    }
    render(){
        return (
            <div className={style.register}>
                <LogRegHeader msg={this.state.msg}/>
                <div className={style['reg_b']}>
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
                        <li>
                            <div className={style['user_icon']}>
                                <Icon type='mail' style={{ fontSize: '.24rem', color: '#716F6F' }} />
                            </div>
                            <input type="text" placeholder="邮箱" />
                        </li>
                        <li>
                            <div className={style['user_icon']}>
                                <Icon type='mobile' style={{ fontSize: '.24rem', color: '#716F6F' }} />
                            </div>
                            <input type="text" placeholder="电话" />
                        </li>
                    </ul>
                </div>
                <div>
                    <input type="button" value="注册" className={style['reg_btn']}/>
                </div>
            </div>
        )
    }
}

export default Register;