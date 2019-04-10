import React,{Component} from 'react'
import style from './assets/css/navhome.module.css'
class NavHome extends Component {
    render() {
        return (
            <ul className={style.navhome}>
                <li>
                    <a href="#">食谱</a>
                </li>
                <li>
                    <a href="#">百科</a>
                </li>
                <li>
                    <a href="#">问答</a>
                </li>
            </ul>
        )
    }
}

export default NavHome;