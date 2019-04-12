import React,{Component} from 'react';
import style from './assets/css/content.module.css';
import {Icon} from 'antd';

class Content extends Component{
    render(){
        return (
            <div className={style.content}>
                    <ul>
                        <li>
                            <div className={style['con_t']}>
                                <div className={style['af_icon']}></div>
                                <div className={style.af_auth}>
                                    <p className={style.auth}>vivi妈妈</p>
                                    <p className={style.time}>3秒前</p>
                                </div>
                            </div>
                            <div className={style['con_c']}>
                                <p>清晨起来打开窗，阳光美美哒，看着蝴蝶闻花香，风景美美哒，你在远处看着我，笑容美美哒，我的心就像朵花儿，开的美美哒，我爱你你爱我，感情美美哒，爸爸妈妈身体好，亲情美美哒...</p>
                                <p className={style.all}>全文</p>
                            </div>
                            <div className={style['con_pic']}></div>
                            <div className={style['con_b']}>
                                <span>分享</span>
                                <span>评论</span>
                                <span><Icon type="heart" style={{ fontSize: '.14rem', color: '#717070' }} className={style.heart}/>9999</span>
                            </div>
                        </li>
                        <li>
                            <div className={style['con_t']}>
                                <div className={style['af_icon']}></div>
                                <div className={style.af_auth}>
                                    <p className={style.auth}>嘻嘻公主</p>
                                    <p className={style.time}>59秒前</p>
                                </div>
                            </div>
                            <div className={style['con_c']}>
                                <p>清晨起来打开窗，阳光美美哒，看着蝴蝶闻花香，风景美美哒，你在远处看着我，笑容美美哒，我的心就像朵花儿，开的美美哒，我爱你你爱我，感情美美哒，爸爸妈妈身体好，亲情美美哒...</p>
                                <p className={style.all}>全文</p>
                            </div>
                            <div className={style['con_pic']}></div>
                            <div className={style['con_b']}>
                                <span>分享</span>
                                <span>评论</span>
                                <span><Icon type="heart" style={{ fontSize: '.14rem', color: '#717070' }} className={style.heart}/>9999</span>
                            </div>
                        </li>
                    </ul>
                </div>
        )
    }
}

export default Content;