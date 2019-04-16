import React,{Component} from 'react'
import style from './assets/css/need.module.css'
import Header from "../../common/header/header";
import {Icon} from 'antd'
import {NavLink} from "react-router-dom";
import {getgoods} from "../../store/actions/getgoods";
import {connect} from "react-redux";

class Need extends Component {
    state={
        pageName:'宝宝必备',
        goods:JSON.parse(sessionStorage.getItem('goods'))
    }
    render(){
        return (
            <div>
                <Header pageName={this.state.pageName}>
                    <Icon type="search" className={style.search} />
                </Header>
                <div className={style.bg}></div>
                <div className={style.list}>
                    <ul>
                        {
                            this.state.goods.map((item,index)=>(
                                <li key={index}>
                                    <NavLink to={'detail/'+item.id}>
                                        <div className={style.pic}>
                                            <img src={item.img_list[0]} alt=""/>
                                        </div>
                                        <div className={style.article}>
                                            <p className={style.title}>{item.title}</p>
                                            <p className={style.desc}>{item.g_desc}</p>
                                            <p className={style.price}>会员价：{item.vip_price}</p>
                                            <p className={style.pj}></p>
                                        </div>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
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
)(Need)
