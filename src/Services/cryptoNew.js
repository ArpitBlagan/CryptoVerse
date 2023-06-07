import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const header={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '6027548222msh3a75a7b4b038f84p1e0aebjsn6c42686d3492',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};
const baseUrl="https://bing-news-search1.p.rapidapi.com/coins";
const req=(url)=>({url,headers:header});
export const cryptoNew=createApi({
    reducerPath:"cryptoNew",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getNews:builder.query({
            query:({cat,count})=>{return {
                url:`https://bing-news-search1.p.rapidapi.com/news/search?limit=${count}`,
                headers:{'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': '6027548222msh3a75a7b4b038f84p1e0aebjsn6c42686d3492',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'},
                params: {
                    q:{cat},
                    safeSearch: 'Off',
                    textFormat: 'Raw'
                }
            }}
        })
    })
})
export const {useGetNewsQuery} =cryptoNew;