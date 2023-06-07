import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../Services/cryptoApi';
import Crypto from '../Component/Crypto';
import News from './News';
const Home=()=>{
  const {data,isFetching}=useGetCryptosQuery(10);
  if(isFetching){return "Loading";}
  const globalStats=data?.data?.stats;
  console.log("ff",data);
  return <>
    <Typography.Title levle={2} className='heading' style={{marginLeft:"10px",textAlign:"center"}}>Global CryptopStats</Typography.Title>
    <Row gutter={[12,12]} style={{marginLeft:"10px"}}>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
      <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets) } /></Col>
    </Row>
     <Crypto simp="val"/>
     <Typography.Title levle={3} className='show-more'>
      <Link to="/crypto"> show more</Link>
    </Typography.Title>
    <News simp="a"/>
    <div className="home-heading-container">
    </div>
  </>
}
export default Home;