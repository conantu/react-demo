import React,{Component} from 'react';
 import style from './assets/css/joincar.module.css';
import Header from '../../common/header/header';
import good1 from './assets/img/good1.png';
import {getdetail} from "../../store/actions/getdetail";
import {GET_DETAIL} from "../../store/types";
import {connect} from "react-redux";
 class JoinCar extends Component{
     state={
         num:1,
         add:'广东省深圳市南山区一隅清欢设计工作室',
         // goods:JSON.parse(sessionStorage.getItem('goods'))[this.props.location.pathname.slice(9)-1]
         goods:JSON.parse(sessionStorage.getItem('detail')),
         color:'',
         size:''
     }
    render(){
         console.log(this.state.color,this.state.size,this.state.num)
         let {goods} = this.state
    return (
        <div className={style.joincar}>
            <Header/>
            <div className={style.goodpic}>
                <img src={goods.img_list?goods.img_list[0]:''}/>
            </div>
            <div className={style['good_b']}>
                <div className={style.goodmsg}>
                    <p>{goods.title}</p>
                    <span>{goods.price}</span>
                </div>
                <div className={style.num}>
                    <span className={style.nums} >数量</span>
                    <span className={style.jian} onClick={this.minus.bind(this)}>-</span>
                    <input type="text" value={this.state.num} name="num" onChange={this.mess.bind(this)}/>
                    <span className={style.jia} onClick={this.plus.bind(this)}>+</span>
                </div>
                <div className={style.size}>
                    <span className={style.sizes}>尺寸</span>  
                    <div className={style.sizetype}  onClick={this.choose.bind(this,this,style.typeactive)}>
                        {/*<span className={style.typeactive}>30cm</span>*/}
                        {/*<span>40cm</span>*/}
                        {/*<span>50cm</span>*/}
                        {/*<span>60cm</span>*/}
                        {/*<span>70cm</span>*/}
                        {
                            goods.g_size.map((item,index)=>(
                                <span key={index}>{item}</span>
                            ))
                        }
                    </div>             
                </div>
                <div className={style.color}>
                    <span className={style.colors}>颜色</span>  
                    <div className={style.colortype} onClick={this.choose.bind(this,this,style.coloractive)}>
                        {/*<span className={style.coloractive}>浅粉</span>*/}
                        {/*<span>浅蓝</span>*/}
                        {/*<span>浅灰</span>*/}
                        {/*<span>深灰</span>*/}
                        {
                            goods.g_type.map((item,index)=>(
                                <span key={index}>{item}</span>
                            ))
                        }
                    </div>             
                </div>
                <div className={style.add}>
                    <span className={style.adds}>配送至</span>
                    <textarea value={this.state.add} name="add" onChange={this.mess.bind(this)}>广东省深圳市南山区一隅清欢设计工作室</textarea> 
                </div>
            </div>
            <div className={style.sub}>
                <a href="#">确认</a>
            </div>
        </div>
    )        
    }
    mess(ev){
        this.setState({
            [ev.target.name]:ev.target.value
            })
    }
    minus(){
        this.setState({
            num:this.state.num-1<0?0:this.state.num-1
        })
    }
    plus(){
        this.setState({
            num:this.state.num+1
        })
    }
    choose(_this,type,ev){
        if(ev.target.tagName == 'SPAN'){
            Array.from(ev.target.parentNode.children).forEach((item)=>{
                item.className = ''
            })
            ev.target.className=type
            type.indexOf('color') != -1 ? _this.setState({color:ev.target.innerHTML}) : _this.setState({size:ev.target.innerHTML})
        }
    }
 }

const initMapStateToProps=(state)=>({
    detail:state.detail
});

const initMapDispatchToProps=dispatch=>({

});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(JoinCar)