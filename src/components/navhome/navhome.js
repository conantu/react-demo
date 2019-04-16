import React,{Component} from 'react'
import style from './assets/css/navhome.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {SET_TYPE} from "../../store/types";
class NavHome extends Component {
    render() {
        return (
            <ul className={style.navhome}>
                <li>
                    <NavLink to={'/home/food'} onClick={()=>this.props.setType('food')}>食谱</NavLink>
                </li>
                <li>
                    <NavLink to={'/home/baike'} onClick={()=>this.props.setType('baike')}>百科</NavLink>
                </li>
                <li>
                    <NavLink to={'/home/answer'} onClick={()=>this.props.setType('answer')}>问答</NavLink>
                </li>
            </ul>
        )
    }
}

const initMapStateToProps=(state)=>({

});

const initMapDispatchToProps=dispatch=>({
    setType:(type)=>{dispatch({type:SET_TYPE,payload:type})}
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(NavHome)