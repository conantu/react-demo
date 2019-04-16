import React,{Component} from 'react';
import icon1 from './assets/img/icon1.png';
import icon2 from './assets/img/icon2.png';
import style from './assets/css/message.module.css';

class Message extends Component{
    state={
        list:[{
            icon:'http://img4.imgtn.bdimg.com/it/u=105401705,3073581821&fm=26&gp=0.jpg',
            username:'我有一只猫c',
            time:'11:11',
            content:'你好呀！！'
        },{
            icon:'http://img0.pconline.com.cn/pconline/1506/29/6638168_1755_thumb.jpg',
            username:'Vick婉晴妈妈',
            time:'12:21',
            content:'哈喽！'
        },{
            icon:'http://img.52z.com/upload/news/image/20180312/20180312062532_60115.jpg',
            username:'萌小宝',
            time:'13:31',
            content:'hi~'
        },{
            icon:'http://img1.imgtn.bdimg.com/it/u=3523617831,1288544462&fm=26&gp=0.jpg',
            username:'米粒Fimi',
            time:'14:41',
            content:'嘿'
        },{
            icon:'http://img.52z.com/upload/news/image/20180509/20180509085548_70320.jpg',
            username:'嘻嘻公主',
            time:'15:51',
            content:'今天去爬山啦！'
        },{
            icon:'http://img.52z.com/upload/news/image/20180806/20180806031623_59011.jpg',
            username:'小胖',
            time:'16:51',
            content:'蹦起来！'
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
                                    <div className={style['mess_icon']}>
                                        <img src={item.icon}/>
                                    </div>
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