import React,{Component} from 'react'
import style from './assets/css/user.module.css'
import {NavLink} from "react-router-dom";
import {CLEAR_USER} from "../../store/types";
import {connect} from "react-redux";
class User extends Component {
    render(){
        let {user} = this.props
        sessionStorage.getItem('login') ? user=JSON.parse(sessionStorage.getItem('login')) : ''
        return (
            <div>
                <div className={style["user-head"]}>
                    <div className={style.title}>我的</div>
                    <div className={style.set}>
                        <a href="#" onClick={()=>this.props.logout(this)}>注销</a>
                    </div>
                    <div className={style.icon}>
                        <img src={user.msg.icon} alt=""/>
                    </div>
                    <div className={style.username}>{user.msg.username}</div>
                    <div className={style.desc}><span>生活达人</span></div>
                </div>
                <div className={style["user-c"]}>
                    <div className={style.follow}>
                        <p className={style["follow-num"]}>{user.msg.follow_id.length}</p>
                        <span>关注</span>
                    </div>
                    <div className={style.fans}>
                        <p className={style["fans-num"]}>{user.msg.fans_id}</p>
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
                            <NavLink to={'/car'}>
                                <div className={style.circle}></div>
                                <p>购物车</p>
                            </NavLink>
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

const initMapStateToProps=(state)=>({
    user:state.user
});

const initMapDispatchToProps=dispatch=>({
    logout:(_this)=>{
        sessionStorage.removeItem('login');
        sessionStorage.removeItem('users');
        _this.props.history.push('/login')
        dispatch({type:CLEAR_USER})
    }
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(User)