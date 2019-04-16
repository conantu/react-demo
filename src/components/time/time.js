import React,{Component} from 'react';
import './assets/css/time.css';
import {connect} from 'react-redux';
class Time extends Component {
    state={
        list:["http://img.zcool.cn/community/01c42158c24411a801219c7793e8e5.jpg@1280w_1l_2o_100sh.jpg",
            "http://k.zol-img.com.cn/dcbbs/22811/a22810570_s.jpg",
            "http://www.pconline.com.cn/pcedu/softnews/cs/0610/pic/1024yahoo_2.jpg",
            "http://images.bookdao.com/bk/101406/1/3536d2f2-8166-4b89-85b7-d91c3c3eddd7.jpg",
            "http://img0.imgtn.bdimg.com/it/u=3333673254,3662145448&fm=26&gp=0.jpg"
        ]
    }
    render(){
        return (
            <div>
                <div className="top">
                    <div className="name">
                        <p>宝宝</p>
                    </div>
                    <div className="icon">
                        <img src={JSON.parse(sessionStorage.getItem('login')).msg.icon}/>
                    </div>
                    <div className="des">
                        <ul>
                            <li><span>{JSON.parse(sessionStorage.getItem('login')).msg.username}</span></li>
                        </ul>
                    </div>
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="#">云相册</a>
                        </li>
                        <li>
                            <a href="#">成长记录</a>
                        </li>
                        <li>
                            <a href="#">成就</a>
                        </li>
                        <li>
                            <a href="#">亲友团</a>
                        </li>
                    </ul>
                </div>
                <div className="photos">
                    <div className="circle"></div>
                    <div className="pics">
                        <ul>
                            {
                                this.state.list.map((val,index)=>(
                                    <li key={index}>
                                        <img src={val}/>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


const initMapStateToProps=(state)=>({  
});

const initMapDispatchToProps=dispatch=>({


});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Time)