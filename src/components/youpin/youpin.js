import React,{Component} from 'react'
import Header from "../../common/header/header";
import style from './assets/css/youpin.module.css'
import {Icon} from "antd";
import {NavLink} from 'react-router-dom'

class YouPin extends Component {
    state={
        pageName:'优品'
    }
    render(){
        return (
            <>
                <Header pageName={this.state.pageName}>
                    <Icon type="search" className={style.search}/>
                </Header>
                <div className={style.banner}></div>
                <div className={style.cheaper}></div>
                <ul className={style.types}>
                    <li>
                        <NavLink to={'/typemore'}>
                            <div className={style.pic}></div>
                            <div className={style.title}>
                                <p>清洁</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <a href="#">
                            <div className={style.pic}></div>
                            <div className={style.title}>
                                <p>清洁</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className={style.pic}></div>
                            <div className={style.title}>
                                <p>清洁</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className={style.pic}></div>
                            <div className={style.title}>
                                <p>清洁</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className={style.must}>
                    <div className={style["must-title"]}>
                        <p>宝宝必备</p>
                        <NavLink to={'/need'}>all</NavLink>
                    </div>
                    <ul className={style["must-list"]}>
                        <li>
                            <NavLink to={'/detail/1'}>
                                <div className={style.pic}></div>
                                <div className={style.title}>
                                    <p>1片吸干6次尿</p>
                                </div>
                                <div className={style.price}>
                                    <p>会员价￥999</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <div className={style.title}>
                                    <p>1片吸干6次尿</p>
                                </div>
                                <div className={style.price}>
                                    <p>会员价￥999</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <div className={style.title}>
                                    <p>1片吸干6次尿</p>
                                </div>
                                <div className={style.price}>
                                    <p>会员价￥999</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <div className={style.title}>
                                    <p>1片吸干6次尿</p>
                                </div>
                                <div className={style.price}>
                                    <p>会员价￥999</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <div className={style.title}>
                                    <p>1片吸干6次尿</p>
                                </div>
                                <div className={style.price}>
                                    <p>会员价￥999</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <div className={style.title}>
                                    <p>1片吸干6次尿</p>
                                </div>
                                <div className={style.price}>
                                    <p>会员价￥999</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <div className={style.title}>
                                    <p>1片吸干6次尿</p>
                                </div>
                                <div className={style.price}>
                                    <p>会员价￥999</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <div className={style.title}>
                                    <p>1片吸干6次尿</p>
                                </div>
                                <div className={style.price}>
                                    <p>会员价￥999</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <div className={style.title}>
                                    <p>1片吸干6次尿</p>
                                </div>
                                <div className={style.price}>
                                    <p>会员价￥999</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default YouPin;

