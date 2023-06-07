import React,{useEffect, useState} from 'react';
import HTMLReactParser from 'html-react-parser';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useGetCryptoDetailQuery } from '../Services/cryptoApi';
import { useGetCryptoDataQuery } from '../Services/cryptoApi';
import millify from 'millify';
import {Col,Row,Typography,Select} from 'antd';
import Chart from './Chart';
const {Title,Text}=Typography;
const {Option} = Select;
const Detail = () => {
  const {coinId}=useParams();
  const [tim,setTime]=useState('7d');
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
  const{data,isFetching}=useGetCryptoDetailQuery(coinId);
 
 const res=useGetCryptoDataQuery({coinId,tim});
  const Val=res?.data;
  
  const Details=data?.data?.coin;
  const stats = [
    { title: 'Price to USD', value: `$ ${Details?.price && millify(Details?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: Details?.rank, icon: <NumberOutlined /> },    { title: 'Market Cap', value: `$ ${Details?.marketCap && millify(Details?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${Details?.allTimeHigh?.price && millify(Details?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: Details?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: Details?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: Details?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${Details?.supply?.total && millify(Details?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${Details?.supply?.circulating && millify(Details?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];
  if(isFetching){return <h2>Loading</h2>}
  

  return (
    <Col className='coin-detail-contianer'>
    <Col className='coin-heading-container'>
      <Title level={2} className="coin-name">
       {Details?.name} ({Details?.symbol}) Price
      </Title>
      <p>{Details?.name} live price in US dollars.
      View value statistics, market cap and supply</p>
    </Col>
    <Select defaultValue="7d" className='select-timerperiod'
    onChange={(val)=>setTime(val)}
    >
      {time.map((op)=>(<Option key={op}>{op}</Option>))}
    </Select>
    {Val?.data?.history?<Chart coin={Val?.data?.history} change={Val?.data?.change} currentPrice={millify(Details.price)} coinName={Details.name}/>:"Loading"}
    <Col className='stats-container' style={{textAlign:"center", marginLeft:"30px", display:"inline"}}>
      <Col className='coin-value-statistics'>
          <Col className='coin-value-statistics-heading'>
            <Title level={3} className='coin-details-heading'>
              {Details.name} Value Statistic
            </Title>
            <p>
              An overview showing the stats of {Details.name}
            </p>
          {stats.map(({icon,title,value},index)=>(
            <Col className='coin-stats ' key={index}>
              <Col className='coin-stats-name'>
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className='stats'>{value}</Text>
            </Col>
          ))}</Col>
          <Col className='other-stats-info'>
            <Title level={3} className='coin-details-heading'>
              {Details.name} Statistic
            </Title>
          {genericStats.map(({icon,title,value},index)=>(
            <Col className='coin-stats' key={index}>
              <Col className='coin-stats-name'>
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className='stats'>{value}</Text>
            </Col>
          ))}</Col>
      </Col>
    </Col>
    <Col className='coin-desc-link' style={{textAlign:"center", marginLeft:"30px", display:"inline"}}>
            <Col className="coin-links">
              <Title level={3} className='coin-detilas-heading'>{Details.name}</Title>
              {Details.links.map((link)=>(
                <Row className='coin-link' key={link.name}>
                  <Title level={5}>
                    {link.type}
                  </Title>
                  <a herf={link.url} target='_blank'>{link.name}</a>
                </Row>
              ))}
            </Col>
    </Col>
    </Col>
  )
}

export default Detail