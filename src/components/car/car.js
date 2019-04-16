import React,{Component} from 'react';
import style from './assets/css/car.module.css';
import Header from '../../common/header/header';

class Car extends Component{
    state={
        pageName:'购物车'
    }
    render(){
        return (
            <div className={style.car}>
                <Header pageName={this.state.pageName}/>
                <div className={style['car_main']}>
                    <ul>
                        <li>
                           <input type="checkbox"/> 
                           <div className={style.pic}></div>
                           <div className={style.msg}>
                            <p className={style.tit}>6层纯棉纱布浴巾/盖毯/包巾</p>
                            <p>A类品质，无荧光，无甲醛</p>
                            <p>尺码：100*99cm 颜色：蓝色</p>
                            <p className={style.ps}>
                                <span>¥119.8</span>
                                <span>×2</span>
                            </p>
                           </div>
                        </li>
                        <li>
                           <input type="checkbox"/> 
                           <div className={style.pic}></div>
                           <div className={style.msg}>
                            <p className={style.tit}>6层纯棉纱布浴巾/盖毯/包巾</p>
                            <p>A类品质，无荧光，无甲醛</p>
                            <p>尺码：100*99cm 颜色：蓝色</p>
                            <p className={style.ps}>
                                <span>¥119.8</span>
                                <span>×2</span>
                            </p>
                           </div>
                        </li>
                    </ul>
                </div>
                <div className={style.foot}>
                    <div className={style['foot-l']}>
                        <div>
                            <input type="checkbox" />全选
                        </div>
                        <div>合计：￥</div>
                    </div>
                    <div className={style['foot-r']}>
                    结算(0)
                    </div>
                </div>
            </div>
        )
    }
}

export default Car