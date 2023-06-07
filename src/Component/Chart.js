import React from 'react'
import {Line} from 'react-chartjs-2';import {Col,Row,Typography} from 'antd';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as tt,
  Tooltip,
  Legend
}from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  tt,
  Tooltip,
  Legend
);
const {Title}=Typography;
const Chart = ({coin, change, currentPrice, coinName}) => {
  console.log("coin",coin);
  const options={
    responsive:true,
    plugins:{
      legend:{
        position:'top',
      },title:{
        dispaly:true,
        text:'Chart.js Line Chart',
      },
    },
  };
  const data={
    labels:coin.map(({timestamp,price})=>{return timestamp;}),
    datasets:[
      {
        label:'Dataset1',
        data:coin.map(({timestamp,price})=>{return price;}),
        borderColor:'rgb(255,99,132)',
        backgroundColor:'rgba(255,99,132,0.5)'
      },
    ],
  }
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      {coin?<Line options={options} data={data}/>:null}
    </>
  )
}

export default Chart