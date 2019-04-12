import React,{Component} from 'react';
import style from './assets/css/afterfollow.module.css';
import Follow from '../../common/follow/follow';
import {Icon} from 'antd';
import Content from '../../common/content/content';
class AfterFollow extends Component{
    render(){
        return (
            <div className={style.afterfollow}>
                <Follow />
                <Content />
            </div>
        )
    }
}

export default AfterFollow