// console.log('hello, this is Dell');

// if ('serviceWorker' in navigator) {
//     //如果浏览器支持serviceWorker的话,我们在页面加载完毕后注册service-worker
//     window.addEventListener('load', ()=>{
//         navigator.serviceWorker.register('/service-worker.js')
//         .then(registration => {
//             //注册成功，registration会存储一些注册成功的参数
//             console.log('注册成功');
//         }).catch(error => {
//             console.log('注册失败')
//         })
//     })
// }

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import List from './list';
import Home from './home';
class App extends Component {
    // componentDidMount() {
    //     axios.get('/react/api/header.json')
    //     .then(res => {
    //         console.log(res)
    //     })
    // }
    render() {
        // return <div>Hello World</div>
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Home} />
                    <Route path='/list' exact component={List} />
                </div>
            </BrowserRouter>
        )
    }
}
ReactDom.render(<App />,document.getElementById('root'));