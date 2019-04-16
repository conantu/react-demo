import React,{Component} from 'react'
import Header from "../../common/header/header";
import style from './assets/css/youpin.module.css'
import {Icon} from "antd";
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";
import {getgoods} from "../../store/actions/getgoods";

class YouPin extends Component {
    constructor(props){
        super()
        props.getGoods(this)
        this.getBanner()
    }
    state={
        pageName:'优品',
        goods:[],
        banner:{}
    }
    getBanner(){
        fetch('/app/banner').then(res=>res.json()).then(data=>{
            console.log(data)
            this.setState({banner:data.imgs[0]})
        })
    }
    render(){
        return (
            <>
                <Header pageName={this.state.pageName}>
                    <Icon type="search" className={style.search}/>
                </Header>
                <div className={style.banner}>
                    <img src={this.state.banner} alt=""/>
                </div>
                <div className={style.cheaper}></div>
                <ul className={style.types}>
                    <li>
                        <NavLink to={'/typemore'}>
                            <div className={style.pic}></div>
                            <div className={style.title}>
                                <p>清洁</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <a href="#">
                            <div className={style.pic}></div>
                            <div className={style.title}>
                                <p>清洁</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className={style.pic}></div>
                            <div className={style.title}>
                                <p>清洁</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className={style.pic}></div>
                            <div className={style.title}>
                                <p>清洁</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <div className={style.must}>
                    <div className={style["must-title"]}>
                        <p>宝宝必备</p>
                        <NavLink to={'/need'}>all</NavLink>
                    </div>
                    <ul className={style["must-list"]}>
                        {
                            this.state.goods.map(item=>(
                                <li key={item.id}>
                                    <NavLink to={'/detail/'+item.id}>
                                        <div className={style.pic}>
                                            <img src={item.img_list[0]} alt=""/>
                                        </div>
                                        <div className={style.title}>
                                            <p>{item.g_name}</p>
                                        </div>
                                        <div className={style.price}>
                                            <p>会员价{item.vip_price}</p>
                                        </div>
                                    </NavLink>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </>
        )
    }
}

const initMapStateToProps=(state)=>({

});

const initMapDispatchToProps=dispatch=>({
    getGoods:(_this)=>{
        dispatch(getgoods({
            url:'/app/goods'
        })).then(
            res=>{
                console.log(res)
                sessionStorage.setItem('goods',JSON.stringify(res.GOODS))
                _this.setState({
                    goods:JSON.parse(sessionStorage.getItem('goods')).splice(0,9)
                })
            }
        )
    }
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(YouPin)
