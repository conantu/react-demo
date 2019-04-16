import React,{Component} from 'react'
import style from './assets/css/detail.module.css'
import Header from "../../common/header/header";
import SliderHome from "../../common/slider/slider";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getdetail} from "../../store/actions/getdetail";
class Detail extends Component {
    constructor(props){
        super()
        this.state={
            goods:JSON.parse(sessionStorage.getItem('goods'))[props.location.pathname.slice(8)-1],
            id:props.location.pathname.slice(8),
            // goods:{}
        }
        props.getDetail(this)
    }

    render(){
        let {goods} = this.state
        return (
            <div>
                <Header></Header>
                <div className={style.slider}>
                    <SliderHome imgs={goods.img_list}/>
                </div>
                <div className={style.title}>
                    <p>{goods.title}</p>
                </div>
                <div className={style.subtitle}>
                    <p className={style.price}>{goods.price}</p>
                    <p className={style.goodpj}>好评{goods.praise}</p>
                </div>
                <div className={style.vipprice}>会员价：{goods.vip_price}</div>
                <div className={style.details}>
                    <div className={style.designer}>设计者：{goods.designer}</div>
                    <div className={style.ms}>材质：{goods.ms}</div>
                    <div className={style.color}>颜色：{goods.g_type}</div>
                    <div className={style.age}>适龄期：{goods.g_age}</div>
                </div>
                <div className={style.pj}>
                    <div className={style.pjbtn}>
                        <p>好评</p>
                    </div>
                    <div className={style.sizebtn}>
                        <p>
                            <NavLink to={'/joincar/'+goods.id}>规格</NavLink>
                        </p>
                    </div>
                </div>
                <div className={style.desc}>
                    <p>{goods.g_desc}</p>
                </div>
                <div className={style.buy}>
                    <NavLink to={'/joincar/'+goods.id} className={style.addcar}>加入购物车</NavLink>
                    <div className={style.buynow}>立即购买</div>
                </div>
            </div>
        )
    }
}

const initMapStateToProps=(state)=>({

});

const initMapDispatchToProps=dispatch=>({
    getDetail:(_this)=>{
        dispatch(getdetail({
            url:'/app/togoods/?id='+_this.state.id
        })).then(res=>{
            console.log(res.good)
            sessionStorage.setItem('detail',JSON.stringify(res.good))
            _this.setState({goods:res.good})
        })
    }
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Detail)
