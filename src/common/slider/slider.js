import React from 'react'
import Swiper from 'swiper'
import '../../libs/swiper.min.css'
import './assets/css/slider.css'
import img1 from './assets/img/1.png'
import img2 from './assets/img/2.png'
import img3 from './assets/img/3.png'

class SliderHome extends React.Component{
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={img1} alt=""/>
                    </div>
                    <div className="swiper-slide">
                        <img src={img2} alt=""/>
                    </div>
                    <div className="swiper-slide">
                        <img src={img3} alt=""/>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }

    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            autoplay:true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
}

export default SliderHome;