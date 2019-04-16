import React,{Component} from 'react'
import SearchBar from "../../common/search/search";
import SliderHome from "../../common/slider/slider";
import NavHome from "../navhome/navhome";
import News from "../news/news";
import {Route} from 'react-router-dom'

import img1 from './assets/img/1.png'
import img2 from './assets/img/2.png'
import img3 from './assets/img/3.png'
class Home extends Component {
    constructor(){
        super()
    }
    state = {
        imgs:[img1,img2,img3]
    }
    render(){
        return (
            <div>
                <SearchBar/>
                <SliderHome imgs={this.state.imgs}></SliderHome>
                <NavHome></NavHome>
                <Route component={News}></Route>
            </div>
        )
    }
}

export default Home;