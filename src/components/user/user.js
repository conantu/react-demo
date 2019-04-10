import React,{Component} from 'react'
import style from './assets/css/user.module.css'
class User extends Component {
    render(){
        return (
            <div>
                <div className={style["user-head"]}>
                    <div className={style.title}>我的</div>
                    <div className={style.set}>
                        <a href="#">设置</a>
                    </div>
                    <div className={style.icon}></div>
                    <div className={style.username}>我有一只猫</div>
                    <div className={style.desc}><span>生活达人</span></div>
                </div>
                <div className={style["user-c"]}>
                    <div className={style.follow}>
                        <p className={style["follow-num"]}>10</p>
                        <span>关注</span>
                    </div>
                    <div className={style.fans}>
                        <p className={style["fans-num"]}>9999</p>
                        <span>粉丝</span>
                    </div>
                </div>
                <div className={style["user-link"]}>
                    <ul>
                        <li>
                            <a href="#">
                                <div className={style.circle}></div>
                                <p>会员中心</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.circle}></div>
                                <p>制作相册</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.circle}></div>
                                <p>我的收藏</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.circle}></div>
                                <p>购物车</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.circle}></div>
                                <p>我的订单</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className={style.circle}></div>
                                <p>优惠券</p>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}

export default User;