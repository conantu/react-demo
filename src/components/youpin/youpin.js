import React,{Component} from 'react'
import Header from "../../common/header/header";
import style from './assets/css/youpin.module.css'

class YouPin extends Component {
    state={
        pageName:'优品'
    }
    render(){
        return (
            <>
                <Header pageName={this.state.pageName}/>
                <div className={style.banner}></div>
                <div className={style.cheaper}></div>
                <ul className={style.types}>
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
                        <a href="#">all</a>
                    </div>
                    <ul className={style["must-list"]}>
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

