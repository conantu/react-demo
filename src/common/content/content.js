import React,{Component} from 'react';
import style from './assets/css/content.module.css';
import {Icon} from 'antd';
import {connect} from "react-redux";
import {getcontent} from "../../store/actions/getcontent";

class Content extends Component{
    constructor(props){
        super()
        this.state={
            id:JSON.parse(sessionStorage.getItem('login')).msg.id,
            content:{msg:[]}
        }
        props.getContent(this)
    }
    render(){
        sessionStorage.getItem('content')?this.state.content = JSON.parse(sessionStorage.getItem('content')):"";
        let {content} = this.state
        return (
            <div className={style.content}>
                    <ul>
                        {
                            content.msg.map((item,index)=>(
                                <li key={index}>
                                    <div className={style['con_t']}>
                                        <div className={style['af_icon']}>
                                            <img src={item.icon} alt=""/>
                                        </div>
                                        <div className={style.af_auth}>
                                            <p className={style.auth}>{item.username}</p>
                                            <p className={style.time}>3秒前</p>
                                        </div>
                                    </div>
                                    <div className={style['con_c']}>
                                        <p>{item.content[0].f_artick}</p>
                                        <p className={style.all}></p>
                                    </div>
                                    <div className={style['con_pic']}>
                                        <img src={item.content[0].f_img} alt=""/>
                                    </div>
                                    <div className={style['con_b']}>
                                        <span>分享</span>
                                        <span>评论</span>
                                        <span><Icon type="heart" style={{ fontSize: '.14rem', color: '#717070' }} className={style.heart}/>9999</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
        )
    }
}

const initMapStateToProps=(state)=>({
    id:state.id,
    content:state.content
});

const initMapDispatchToProps=dispatch=>({
    getContent:(_this)=>{
        dispatch(getcontent({
            url:'/api/content',
            id:_this.state.id
        })).then(data=>{
            sessionStorage.setItem('content',JSON.stringify(data))
            _this.setState({content:JSON.parse(sessionStorage.getItem('content'))})
            console.log(data)
        })
    }
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Content)