import React,{Component} from 'react'
import style from './assets/css/need.module.css'
import Header from "../../common/header/header";
import {Icon} from 'antd'
import {NavLink} from "react-router-dom";

class Need extends Component {
    state={
        pageName:'宝宝必备'
    }
    render(){
        return (
            <div>
                <Header pageName={this.state.pageName}>
                    <Icon type="search" className={style.search} />
                </Header>
                <div className={style.bg}></div>
                <div className={style.list}>
                    <ul>
                        <li>
                            <NavLink to={'detail/1'}>
                                <div className={style.pic}></div>
                                <div className={style.article}>
                                    <p className={style.title}>全球500强</p>
                                    <p className={style.desc}>德国什么什么高分子</p>
                                    <p className={style.price}>会员价：￥999</p>
                                    <p className={style.pj}>宝马亲测：真的好用！！！！</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <div className={style.article}>
                                    <p className={style.title}>全球500强</p>
                                    <p className={style.desc}>德国什么什么高分子</p>
                                    <p className={style.price}>会员价：￥999</p>
                                    <p className={style.pj}>宝马亲测：真的好用！！！！</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <div className={style.article}>
                                    <p className={style.title}>全球500强</p>
                                    <p className={style.desc}>德国什么什么高分子</p>
                                    <p className={style.price}>会员价：￥999</p>
                                    <p className={style.pj}>宝马亲测：真的好用！！！！</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <div className={style.article}>
                                    <p className={style.title}>全球500强</p>
                                    <p className={style.desc}>德国什么什么高分子</p>
                                    <p className={style.price}>会员价：￥999</p>
                                    <p className={style.pj}>宝马亲测：真的好用！！！！</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Need;
