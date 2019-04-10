import React,{Component} from 'react';
import style from './assets/css/error.module.css';
import {Icon} from 'antd';
class Error extends Component{
    render(){
        return (
            <div className={style.error}>
                <div className={style['icon_user']}>
                    <Icon type="warning" style={{ fontSize: '1.73rem', color: '#FFFFFF' }} />
                </div>
                <div className={style.page}>找不到页面啦！</div>
            </div>
        )
    }
}

export default Error;