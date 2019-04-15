import React,{Component} from 'react';
import style from './assets/css/life.module.css';
import {Icon} from 'antd-mobile';
import Follow from '../../common/follow/follow';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import allusers from '../../store/actions/allusers'
import {SEND_ID} from "../../store/types";
import {attendId} from "../../store/actions/attendId";
class Life extends Component{
    constructor(props){
        super();
        props.getUsers(this)
        this.state={
            // list:[{p1:'我有一只猫',p2:'生活达人'},
            //       {p1:'momo家',p2:'穿搭能手'},
            //       {p1:'小汐姐',p2:'宝宝1岁3个月'},
            //       {p1:'我有一只猫'},
            //       {p1:'momo家'},
            //       {p1:'小汐姐'},
            //       {p1:'我有一只猫'},
            //       {p1:'momo家'},
            //       {p1:'小汐姐'},
            //       {p1:'我有一只猫'},
            //       {p1:'momo家'},
            //       {p1:'小汐姐'}],
            users:{
                "code":"1",
                "msg":[
                    {
                        "_id":"5caff59dbd4ec0efe7a30880","id":"1","username":"alex123","password":"alex123","email":"15906299553@163.com","tel":"15906299553","icon":"https://ps.ssl.qhmsg.com/sdr/400__/t018a31bdec4cc20ac9.jpg","fans_id":"1000","follow_id":["2","3"],
                        "content":[{"f_img":"https://ps.ssl.qhmsg.com/sdr/400__/t018a31bdec4cc20ac9.jpg","f_time":"12","f_artick":"人生，走着走着便懂了，聚散离别太过正常，每个人都有每个人的方向，不必感伤，下一站也许还会有人和我们红尘作伴，共赴人生另一个驿站；人生，走着走着便懂了，孤独是每个人务必经历的，至少我们的内心需要走过一次孤独，因为没谁能陪谁走到最后，所以务必学会独自承受；人生，走着走着便懂了，生活本是一张大网，所有的琐碎都使我们无处可逃，学会坦然乐观地理解，学会用心阳光地生活，不为一点而困，心若向阳，无谓悲伤。"}]
                }]},
            user:{},
            follow_id:[],
            dis:false
        }
    }
    render(){
        console.log(this.state.user)
        sessionStorage.getItem('users')? this.state.users = JSON.parse(sessionStorage.getItem('users')):""
        sessionStorage.getItem('login') ? this.state.user=JSON.parse(sessionStorage.getItem('login')) : ''
        return (
            <div className={style.life}>
                <Follow/>
                <div className={style.follow}>关注你感兴趣的人</div>
                <div className={style.main}>
                    <ul className={style['main-t']} onClick={this.follow.bind(this)}>
                        {
                            this.state.users.msg && this.randomArr(this.state.users.msg,this.state.user.msg.id,this.state.user.msg).map(
                                item=>{
                                    // this.props.user.msg.id == item.id ?
                                    return (<li key={item.id} abc={item.id}>
                                                <div className={style.icon}>
                                                    <img src={item.icon} alt=""/>
                                                </div>
                                                <p>{item.username}</p>
                                                <Icon type="check-circle" className={style['icon-gou']} />
                                            </li>)
                                }
                            )
                            // console.log(this.props.user.msg.id)
                        }
                    </ul>
                    <div className={style.focus}>
                        <a onClick={()=>{
                            this.props.sendId(this)
                            this.props.attend(this)
                        }}>一键关注</a>
                    </div>
                </div>
            </div>
        )
    }
    follow(eve){
        if(eve.target.parentNode.parentNode.tagName == 'LI'){
            eve.target.parentNode.parentNode.children[2].style = getComputedStyle(eve.target.parentNode.parentNode.children[2]).display == 'none' ? 'display:block' : 'display:none';
            // console.log(eve.target.parentNode.parentNode.getAttribute('abc'))
            getComputedStyle(eve.target.parentNode.parentNode.children[2]).display=='block'?this.state.follow_id.push(+eve.target.parentNode.parentNode.getAttribute('abc')):this.state.follow_id.pop(+eve.target.parentNode.parentNode.getAttribute('abc'))
            console.log(this.state.follow_id)
            console.log(this.state.user.msg.id)
        }
    }
    randomArr(arr,id,user){
        let arr2 = []
        arr.forEach((item,index)=>{
            item.id !=id && user.follow_id.map(items=>items!=item.id).indexOf(false)==-1? arr2.push(item) : '';
            // console.log(user.follow_id.map(items=>items!=item.id).indexOf(false))
        })

        return this.shuffle(arr2).splice(0,12);
    }
    shuffle(arr) {
        let i = arr.length;
        while (i) {
            let j = Math.floor(Math.random() * i--);
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr
    }
}

const initMapStateToProps=(state)=>({
    users:state.allusers,
    user:state.user
});

const initMapDispatchToProps=dispatch=>({
    getUsers:(_this)=>{
        dispatch(allusers({
            url:'/api/alluser'
        })).then(
            res=>{
                console.log(res)
                _this.setState({users:res})
                sessionStorage.setItem('users',JSON.stringify(res))
            }
        )
    },
    sendId:(_this)=>{
        dispatch({type:SEND_ID,payload:{id:_this.state.user.msg.id,follow_id:_this.state.follow_id}})
    },
    attend:(_this)=>{
        dispatch(attendId({
            url:'/api/attend',
            id:_this.state.user.msg.id,
            follow_id:_this.state.follow_id.join(',')
        })).then(res=>{
            console.log(res)
            sessionStorage.setItem('login',JSON.stringify({..._this.state.user,msg:{..._this.state.user.msg,follow_id:_this.state.user.msg.follow_id.concat(_this.state.follow_id)}}))
            _this.props.history.push('/afterfollow')
        })
    }
});

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Life)