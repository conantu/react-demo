import React,{Component} from 'react';
import icon1 from './assets/img/icon1.png';
import icon2 from './assets/img/icon2.png';
import style from './assets/css/message.module.css';

class Message extends Component{
    state={
        list:[{
            username:'我有一只猫c',
            time:'11:11',
            content:'你好呀！！'
        },{
            username:'Vick婉晴妈妈',
            time:'12:21',
            content:'哈喽！'
        },{
            username:'萌小宝',
            time:'13:31',
            content:'hi~'
        },{
            username:'米粒Fimi',
            time:'14:41',
            content:'嘿'
        },{
            username:'嘻嘻公主',
            time:'15:51',
            content:'今天去爬山啦！'
        },{
            username:'嘻嘻公主',
            time:'15:51',
            content:'今天去爬山啦！'
        }]
    }
    render(){
        return (
            <div className={style.message}>
                <div className={style.header}>
                    <div className={style.icon1}><img src={icon1}/></div>
                    <p>消息</p>
                    <div className={style.icon2}><img src={icon2}/></div>
                </div>
                <div className={style.main}>
                    <ul className={style['main-ul']}>
                        {
                            this.state.list.map((item,index)=>(
                                <li key={index}>
                                    <div className={style['mess_icon']}></div>
                                    <div className={style['mess_r']}>
                                        <div className={style['mess_r_t']}>
                                            <span>{item.username}</span>
                                            <span className={style.time}>{item.time}</span>
                                        </div>
                                        <div className={style['mess_r_b']}>{item.content}</div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Message;