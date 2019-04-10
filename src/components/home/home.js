import React,{Component} from 'react'
import SearchBar from "../../common/search/search";
import SliderHome from "../../common/slider/slider";
import NavHome from "../navhome/navhome";
import style from './assets/css/home.module.css'
class Home extends Component {
    state={
        list:[
            {img:'',article:'生长发育，8个月第1周宝宝的成长特点',read:'9999万人在读'},
            {img:'',article:'生长发育，8个月第1周宝宝的成长特点',read:'9999万人在读'},
            {img:'',article:'生长发育，8个月第1周宝宝的成长特点',read:'9999万人在读'}
        ]
    }
    render(){
        return (
            <div>
                <SearchBar/>
                <SliderHome></SliderHome>
                <NavHome></NavHome>
                <div className={style.mainhome}>
                    <ul>
                        {
                            this.state.list.map((item,index)=>(
                                <li key={index}>
                                    <a href="#">
                                        <div className={style['main-img']}>
                                            <img src={item.img} alt=""/>
                                        </div>
                                        <div className={style['main-article']}>
                                            <p>{item.article}</p>
                                            <span>{item.read}</span>
                                        </div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;