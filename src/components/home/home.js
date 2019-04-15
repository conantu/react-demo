import React,{Component} from 'react'
import SearchBar from "../../common/search/search";
import SliderHome from "../../common/slider/slider";
import NavHome from "../navhome/navhome";
import News from "../news/news";
import {Route} from 'react-router-dom'
class Home extends Component {
    render(){
        return (
            <div>
                <SearchBar/>
                <SliderHome></SliderHome>
                <NavHome></NavHome>
                <Route component={News}></Route>
            </div>
        )
    }
}

export default Home;