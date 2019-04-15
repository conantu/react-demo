import React,{Component} from 'react';
import style from './assets/css/afterfollow.module.css';
import Follow from '../../common/follow/follow';
import {Icon} from 'antd';
import Content from '../../common/content/content';
import {connect} from "react-redux";
class AfterFollow extends Component{
    render(){
        console.log(this.props.id,this.props.follow_id)
        return (
            <div className={style.afterfollow}>
                <Follow />
                <Content />
            </div>
        )
    }
}

const initMapStateToProps=(state)=>({
    id:state.id,
    follow_id:state.follow_id
});

const initMapDispatchToProps=dispatch=>({
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(AfterFollow)