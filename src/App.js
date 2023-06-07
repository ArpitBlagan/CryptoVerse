import React from 'react';
import './App.css'
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import { Layout,Typography,Space } from 'antd';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import Crypto from './Component/Crypto';
import Detail from './Component/Detail';
import News from './Component/News';
export const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <NavBar/>
        </div>
        <div className='main'>
                <div>
                <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/crypto" element={<Crypto simp="sdf"/>}/>
                        <Route path="/news" element={<News simp="as"/>}/>
                        <Route path="/crypto/:coinId" element={<Detail/>}/>
                </Routes>
                </div>
            <div className='footer' style={{color:"white"}}>
            <div>
                Cryptoverse All rights reserverd
            </div>
            <Space>
                <h5><Link to="/">Home</Link></h5>
                <h5><Link to="/news</Space>">News</Link></h5>
            </Space>
        </div>
        </div>
    </div>
  )
}
