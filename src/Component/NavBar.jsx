import React from 'react';
import { Menu,Button,Typography,Avatar } from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons';
import MenuItem from 'antd/es/menu/MenuItem';
const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
      <Avatar src='https://i.ibb.co/Z11pcGG/cryptocurrency.png' style={{height:"60px",width:"70px"}}/>
            <Typography.Title level={2} className='logo'>
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
      </div>
        <div>
            <Menu theme='dark' >
            <MenuItem icon={<HomeOutlined/>}>
              <Link to="/">Home</Link></MenuItem>
              <MenuItem icon={<FundOutlined/>}>
              <Link to="/crypto">Cryptocurrencies</Link>
              </MenuItem>
              <MenuItem icon={<BulbOutlined/>}>
                <Link to="/news">News</Link>
              </MenuItem>
            </Menu>
        </div>
    </div>
  )
}

export default NavBar