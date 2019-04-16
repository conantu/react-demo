import React,{Component} from 'react'
import style from './assets/css/news.module.css'
import {SET_TYPE, VIEW_LOADING} from "../../store/types";
import {connect} from "react-redux";
import {getnews} from "../../store/actions/getnews";
class News extends Component {
    constructor(props){
        super()
        this.state={
            list:[],
            type:props.location.pathname.slice(6)?props.location.pathname.slice(6):"food"
        }
        props.getNews(this,this.state.type)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.setState({
                type: nextProps.location.pathname.slice(6)
            });
        }
        this.props.getNews(this,this.state.type)
    }
    render(){
        return (
            <div className={style.mainhome}>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>
                                <a>
                                    <div className={style['main-img']}>
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <div className={style['main-article']}>
                                        <p>{item.title}</p>
                                        <span>{item.people}万人在读</span>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const initMapStateToProps=(state)=>({
    type:state.type
});

const initMapDispatchToProps=dispatch=>({
    getNews:(_this,type)=>{
        dispatch(getnews({
            url:'/api/news',
            data:_this.state.type
        })).then(res=>{
            // console.log(res)
            _this.setState(
               {list:res.msg}
            )
        })
    }
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(News)