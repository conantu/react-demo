import React,{Component} from 'react';
import style from './assets/css/register.module.css';
import LogRegHeader from '../../common/log_reg_header/log_reg_header';
import {Icon} from 'antd';

class Register extends Component{
    state={
        msg:'reg',
        username:'',
        password:'',
        email:'',
        tel:''
    }
    render(){
        return (
            <div className={style.register}>
                <LogRegHeader msg={this.state.msg}/>
                <div className={style['reg_b']}>
                    <ul>
                        <li>
                            <div className={style['user_icon']}>
                                <Icon type='user' style={{ fontSize: '.24rem', color: '#716F6F' }} />
                            </div>
                            <input type="text" placeholder="用户名" value={this.state.username} name="username" onChange={this.mess.bind(this)}/>
                        </li>
                        <li>
                            <div className={style['user_icon']}>
                                <Icon type='lock' style={{ fontSize: '.24rem', color: '#716F6F' }} />
                            </div>
                            <input type="password" placeholder="密码" value={this.state.password} name="password" onChange={this.mess.bind(this)}/>
                        </li>
                        <li>
                            <div className={style['user_icon']}>
                                <Icon type='mail' style={{ fontSize: '.24rem', color: '#716F6F' }} />
                            </div>
                            <input type="text" placeholder="邮箱" value={this.state.email} name="email" onChange={this.mess.bind(this)}/>
                        </li>
                        <li>
                            <div className={style['user_icon']}>
                                <Icon type='mobile' style={{ fontSize: '.24rem', color: '#716F6F' }} />
                            </div>
                            <input type="text" placeholder="电话" value={this.state.tel} name="tel" onChange={this.mess.bind(this)}/>
                        </li>
                    </ul>
                </div>
                <div>
                    <input type="button" value="注册" className={style['reg_btn']} onClick={this.reg.bind(this)}/>
                </div>
            </div>
        )
    }
    mess(ev){
        this.setState({
            [ev.target.name]:ev.target.value
          })
        }
    reg(){
        let url = `/api/userreg?username=${this.state.username}&password=${this.state.password}&email=${this.state.email}&tel=${this.state.tel}`;
        if(this.state.username&&this.state.password&&this.state.email&&this.state.tel){
            let reguser = /^\w{6,18}$/;
            let regpass = /^[a-zA-Z_][\w]{5,15}$/;
            let regemail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
            let regtel = /^1[3|4|5|8]\d{9}$/;
            if(!reguser.test(this.state.username)){
                alert("用户名长度6-18位哦！")
            }else if(!regpass.test(this.state.password)){
                alert("密码开头为字母，长度6-16位哦！")
            }else if(!regemail.test(this.state.email)){
                alert("邮箱格式有误！")
            }else if(!regtel.test(this.state.tel)){
                alert("手机号格式有误！")
            }else{
                fetch(url).then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data=="0"){
                        alert("该用户已存在!")
                    }else if(data=="1"){
                        alert("成功，3秒后跳转到登录");
                        setTimeout(() => {
                            this.props.history.push('/login');
                        }, 3000);
                    }
                })
            }
        }else{
            alert("不能有空哦！！！");
        }  
    }
}

export default Register;