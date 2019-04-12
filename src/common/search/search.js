import style from './assets/css/search.module.css'
import React from 'react'
import {Icon} from 'antd'
let SearchBar = (props)=>(
    <div className={style['search-bar']}>
        <input type="text"/>
        <Icon type={'search'} />
    </div>
)

export default SearchBar;