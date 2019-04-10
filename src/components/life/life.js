import React,{Component} from 'react';
import style from './assets/css/life.module.css';
import {Icon,Grid} from 'antd-mobile';
import {NavLink} from 'react-router-dom'
class Life extends Component{
    constructor(){
        super();
        this.state={
            list:[{p1:'我有一只猫',p2:'生活达人'},
                  {p1:'momo家',p2:'穿搭能手'},
                  {p1:'小汐姐',p2:'宝宝1岁3个月'},
                  {p1:'我有一只猫'},
                  {p1:'momo家'},
                  {p1:'小汐姐'},
                  {p1:'我有一只猫'},
                  {p1:'momo家'},
                  {p1:'小汐姐'},
                  {p1:'我有一只猫'},
                  {p1:'momo家'},
                  {p1:'小汐姐'}],
                  dis:false
        }
    }
    render(){
        return (
            <div className={style.life}>
                <div className={style.header}>
                    <ul className={style.head}>
                        <li className={style.active}>关注</li>
                        <li>社区</li>
                        <li>
                            <NavLink to={'/youpin'}>优品</NavLink>
                        </li>
                    </ul>
                    <div className={style.follow}>关注你感兴趣的人</div>
                </div>
                <div className={style.main}>
                    <ul className={style['main-t']}  ref={'gou'}  onClick={this.follow.bind(this)}>
                        {
                            this.state.list.map((item,index)=>(
                            <li key={index}>
                                    <div className={style.icon}></div>
                                    <p>{item.p1}</p>
                                    <p>{item.p2}</p>
                                    <Icon type="check-circle" className={style['icon-gou']} />
                            </li>)
                            )
                        }
                    </ul>
                    <div className={style.focus}>一键关注</div>
                </div>
            </div>
        )
    }
    follow(eve){
        if(eve.target.parentNode.tagName == 'LI'){
            eve.target.parentNode.children[3].style = getComputedStyle(eve.target.parentNode.children[3]).display == 'none' ? 'display:block' : 'display:none';
        }
    }
}

export default Life;