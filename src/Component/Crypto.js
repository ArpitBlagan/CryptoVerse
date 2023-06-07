import React,{useState,useEffect} from 'react'
import millify from 'millify';
import {Link} from 'react-router-dom';
import {Card,Row,Col,Input,Typography} from 'antd';
import { useGetCryptosQuery } from '../Services/cryptoApi';
const Crypto = ({simp}) => {
  const count=simp==="val"?10:100;const [crypt,setCrypt]=useState([]);
  const [search,setSearch]=useState("");
  const {data:cryptoList,isFetching}=useGetCryptosQuery(count);
  useEffect(()=>{
    const filterData=cryptoList?.data?.coins.filter((coins)=>coins.name.toLowerCase().includes(search.toLocaleLowerCase()));
    setCrypt(filterData);
  },[cryptoList,search]);
  if(isFetching||!crypt){return "Loading";}
  return (
    <>
        <Typography.Title levle={2} style={{textAlign:"center"}} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>

      <div className='search-crypto'>
        <Input placeholder='search cryptocurrency' 
        onChange={(e)=>{setSearch(e.target.value)}}
        value={search}
        />
      </div>
     <Row gutter={[32,32]} className='crypto-card-container'>
        {crypt.map((curr,index)=>(
          <Col key={index} xs={24} sm={12} lg={6} className='crypto-card'>
            <Link to={`/crypto/${curr.uuid}`}>
              <Card title={`${curr.rank}.${curr.name}`} extra={<img src={curr.iconUrl} className='crypto-image'/>} hoverable>
                <p>Price:{millify(curr.price)}</p>
                <p>Price:{millify(curr.marketCap)}</p>
                <p>Price:{millify(curr.change)}%</p>
              </Card>
            </Link>
          </Col>        
      ))}
     </Row>
    </>
  )
}

export default Crypto