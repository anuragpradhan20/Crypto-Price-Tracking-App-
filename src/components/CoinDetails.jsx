import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { COINGECKO_API_URL_FOR_ID, CURRENCY_SYMBOL, OPTIONS } from '../utils/data';
import Loader from '../utils/Loader';
import LineChat from './LineChat';

const CoinDetails = () => {
    let [coinDetails,setCoinDetails]=useState([]);
    let [coinHistoricalData,setCoinHistoricalData]=useState(null);
    let {coinId}=useParams();
    let currency=useSelector((store)=>store.coin.currency);
    let symbol=CURRENCY_SYMBOL[currency.toLowerCase()];
    useEffect(()=>{
        fetchCoinDetails();
        fetchCoinHistoricalData();
    },[currency])
    let fetchCoinHistoricalData=async ()=>{
        let data=await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=10&interval=daily`,OPTIONS);
        let response=await data.json();
       setCoinHistoricalData(response);
    }
    let fetchCoinDetails=async ()=>{
        let data=await fetch(COINGECKO_API_URL_FOR_ID+`=${currency}&ids=${coinId}`,OPTIONS);
        let response=await data.json();
        setCoinDetails(response);
    }
    if(coinDetails.length===0 && coinHistoricalData===null){return <Loader/>;}
    console.log(coinHistoricalData);
  return (
    <div className='w-[700px] mx-auto my-20  flex flex-col items-center text-white'>
         <img src={coinDetails[0]?.image} alt="" className='w-20'/>
         <h1 className='font-semibold text-4xl my-10 '>{coinDetails[0]?.name} {`(${coinDetails[0]?.symbol.toUpperCase()})`}</h1>
         <div className='w-[500px] my-10'>
            <LineChat coinHistoricalData={coinHistoricalData}/>
         </div>
         <div className='w-10/12'>
            <div className='w-full text-lg font-semibold border-b py-2 flex justify-between items-center'>
            <p>Crypto Market Rank</p>
            <p>{coinDetails[0]?.market_cap_rank}</p>
            </div>
            <div className='w-full text-lg font-semibold border-b py-2 flex justify-between items-center'>
            <p>Current Price</p>
            <p>{symbol}{coinDetails[0]?.current_price.toLocaleString()}</p>
            </div>
            <div className='w-full text-lg font-semibold border-b py-2 flex justify-between items-center'>
            <p>Market cap</p>
            <p>{symbol}{coinDetails[0]?.market_cap.toLocaleString()}</p>
            </div>
            <div className='w-full text-lg font-semibold border-b py-2 flex justify-between items-center'>
            <p>24 Hour high</p>
            <p>{symbol}{coinDetails[0]?.high_24h.toLocaleString()}</p>
            </div>
            <div className='w-full text-lg font-semibold border-b py-2 flex justify-between items-center'>
            <p>24 Hour low</p>
            <p>{symbol}{coinDetails[0]?.low_24h.toLocaleString()}</p>
            </div>
         </div>
    </div>
  )
}

export default CoinDetails;