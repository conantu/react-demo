import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import style from './assets/css/follow.module.css';
class Follow extends Component{
    render(){
        return (
            <div className={style.header}>
                <ul className={style.head}>
                    <li className={style.active}>关注</li>
                    <li>
                        <NavLink to={'/community'}>社区</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/youpin'}>优品</NavLink>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Follow