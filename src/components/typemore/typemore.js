import React,{Component} from 'react';
import style from './assets/css/typemore.module.css';
import Header from '../../common/header/header';
import {Icon} from 'antd';

class TypeMore extends Component{
    state={
        pageName:'清洁'
    }
    render(){
        return (
            <div className={style.typemore}>
                <Header pageName={this.state.pageName}>
                    <Icon type="search" className={style.search} />
                </Header>
                <div className={style['type_main']}>
                    <ul>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <p>棉柔亲肤纸尿裤</p>
                                <p>会员价￥999</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <p>棉柔亲肤纸尿裤</p>
                                <p>会员价￥999</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <p>棉柔亲肤纸尿裤</p>
                                <p>会员价￥999</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <p>棉柔亲肤纸尿裤</p>
                                <p>会员价￥999</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <p>棉柔亲肤纸尿裤</p>
                                <p>会员价￥999</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <p>棉柔亲肤纸尿裤</p>
                                <p>会员价￥999</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <p>棉柔亲肤纸尿裤</p>
                                <p>会员价￥999</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <p>棉柔亲肤纸尿裤</p>
                                <p>会员价￥999</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <p>棉柔亲肤纸尿裤</p>
                                <p>会员价￥999</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.pic}></div>
                                <p>棉柔亲肤纸尿裤</p>
                                <p>会员价￥999</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> 
        )
    }
}

export default TypeMore