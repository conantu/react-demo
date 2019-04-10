import React from 'react';
import style from './assets/css/footer.module.css';
import {NavLink} from 'react-router-dom'

let Footer = (props)=>{
    return (
        <div className={style.footer}>
            <ul className={style["footer-b"]}>
                <li>
                    <NavLink to={'/home'} activeClassName={style.active}>锦囊</NavLink>
                </li>
                <li>
                    <NavLink to={'/life'} activeClassName={style.active}>生活</NavLink>
                </li>
                <li>
                    <NavLink to={'/time'} activeClassName={style.active}>时光记</NavLink>
                </li>
                <li>
                    <NavLink to={'/message'} activeClassName={style.active}>消息</NavLink>
                </li>
                <li>
                    <NavLink to={'/user'} activeClassName={style.active}>我的</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Footer;