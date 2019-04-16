import React from 'react'
import ReactDom from 'react-dom'
import App from "./App";
import './assets/css/public.css'
import {BrowserRouter,Route} from 'react-router-dom'
import store from './store'
import {Provider} from 'react-redux'

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}></Route>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
)

