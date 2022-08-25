import React from "react";
import ReactDOM from "react-dom/client"
import {App} from "./HelloWorldApp"
import {FirstApp} from "./FirstApp";
import {CounterApp} from './CounterApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<FirstApp title={"holaaaaaaaa"} subTitle={"como estaaaaaaa"}/>*/}
        <CounterApp value={10}/>
    </React.StrictMode>
)