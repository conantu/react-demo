import React,{Component} from 'react';
import style from './assets/css/community.module.css';
import Header from '../../common/header/header';
import {Icon} from 'antd';
import Content from '../../common/content/content';
class Community extends Component{
    state={
        pageName:'社区'
    }
    render(){
        return (
            <div className={style.community}>
                <Header pageName={this.state.pageName}>
                <Icon type="search" className={style.search} />
                </Header>
                <div className={style.bg}></div>
                <div>
                    <ul className={style.type}>
                        <li>
                            <div className={style['type_icon']}></div>
                            <p>备孕</p>
                        </li>
                        <li>
                            <div className={style['type_icon']}></div>
                            <p>孕期</p>
                        </li>
                        <li>
                            <div className={style['type_icon']+' '+style.active}></div>
                            <p>育儿</p>
                        </li>
                        <li>
                            <div className={style['type_icon']}></div>
                            <p>家常</p>
                        </li>
                        <li>
                            <div className={style['type_icon']}></div>
                            <p>旅行</p>
                        </li>
                    </ul>
                </div>
                <Content />
            </div>
        )
    }    
}

export default Community