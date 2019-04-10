import React,{Component} from 'react'
import './assets/css/time.css'
class Time extends Component {
    render(){
        return (
            <div>
                <div className="top">
                    <div className="name">
                        <p>宝宝</p>
                    </div>
                    <div className="icon"></div>
                    <div className="des">
                        <ul>
                            <li><span>ABC</span></li>
                            <li><span>1个月2天</span></li>
                        </ul>
                    </div>
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="#">云相册</a>
                        </li>
                        <li>
                            <a href="#">成长记录</a>
                        </li>
                        <li>
                            <a href="#">成就</a>
                        </li>
                        <li>
                            <a href="#">亲友团</a>
                        </li>
                    </ul>
                </div>
                <div className="photos">
                    <div className="circle"></div>
                    <div className="pics">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Time;