import React,{Component} from 'react'
import style from './assets/css/detail.module.css'
import Header from "../../common/header/header";
import SliderHome from "../../common/slider/slider";
import {NavLink} from "react-router-dom";
class Detail extends Component {
    render(){
        return (
            <div>
                <Header></Header>
                <div className={style.slider}>
                    <SliderHome/>
                </div>
                <div className={style.title}>
                    <p>宝宝秋冬加棉保暖套装</p>
                </div>
                <div className={style.subtitle}>
                    <p className={style.price}>￥999</p>
                    <p className={style.goodpj}>好评99%</p>
                </div>
                <div className={style.vipprice}>会员价：￥99</div>
                <div className={style.details}>
                    <div className={style.designer}>设计者：fzw</div>
                    <div className={style.ms}>材质：100%纯棉</div>
                    <div className={style.color}>颜色：浅蓝</div>
                    <div className={style.age}>适龄期：3-5岁</div>
                </div>
                <div className={style.pj}>
                    <div className={style.pjbtn}>
                        <p>好评</p>
                    </div>
                    <div className={style.sizebtn}>
                        <p>
                            <NavLink to={'/joincar'}>规格</NavLink>
                        </p>
                    </div>
                </div>
                <div className={style.desc}>
                    <p>宝贝很好，材质很好，手感也很柔软，适合宝宝穿</p>
                </div>
                <div className={style.buy}>
                    <div className={style.addcar}>加入购物车</div>
                    <div className={style.buynow}>立即购买</div>
                </div>
            </div>
        )
    }
    componentDidMount() {

    }
}

export default Detail;