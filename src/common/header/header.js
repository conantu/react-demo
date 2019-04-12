import React,{Component} from 'react'
import style from './assets/css/header.module.css'
import {Icon} from 'antd'
class Header extends Component {
    render(){
        return (
            <div className={style.header}>
                <a href="javascript:;" className={style.back} onClick={this.back.bind(this)}>
                    <Icon type="left" />
                </a>
                <p className={style.title}>{this.props.pageName}</p>
                {this.props.children}
            </div>
        )
    }
    back(){
       history.go(-1)
    }
}

export default Header;
