import React from 'react'
import ReactDom from 'react-dom'
import App from "./App";
import './assets/css/public.css'
import {BrowserRouter,Route} from 'react-router-dom'
ReactDom.render(
    <BrowserRouter>
        <Route component={App}></Route>
    </BrowserRouter>,
    document.querySelector("#root")
)

