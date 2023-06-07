import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import { TimePicker } from 'antd';
const baseUrl='https://coinranking1.p.rapidapi.com/coins';
const crytpoApiHeader={
    'X-RapidAPI-Key': '6027548222msh3a75a7b4b038f84p1e0aebjsn6c42686d3492',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
export const cryptoApi=createApi({
    reducerPath :'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>{
                return {
                    url:`https://coinranking1.p.rapidapi.com/coins?limit=${count}`,
                    headers:{
                        'X-RapidAPI-Key': '6027548222msh3a75a7b4b038f84p1e0aebjsn6c42686d3492',
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                    },params:{
                        referenceCurrencyUuid: 'yhjMzLPhuIDl'
                    }
                }
            }
        }),
        getCryptoDetail:builder.query({
            query:(coinId)=>{
                return {
                    url:`https://coinranking1.p.rapidapi.com/coin/${coinId}`,
                    headers:{
                        'X-RapidAPI-Key': '6027548222msh3a75a7b4b038f84p1e0aebjsn6c42686d3492',
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                    }
                }
            }
        }),
        getCryptoData:builder.query({
            query:({coinId,tim})=>{
                return {
                    url:`https://coinranking1.p.rapidapi.com/coin/${coinId}/history?timePeriod=${tim}`,
                    headers:{
                        'X-RapidAPI-Key': '6027548222msh3a75a7b4b038f84p1e0aebjsn6c42686d3492',
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                    }
                }
            }
        })
    })
});
export const{useGetCryptosQuery,useGetCryptoDetailQuery,useGetCryptoDataQuery}=cryptoApi;