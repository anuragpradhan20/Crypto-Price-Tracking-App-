import { useEffect, useState } from "react";
import { COINGECKO_API_URL, OPTIONS } from "../utils/data";
import CoinCard from "./CoinCard";
import { useSelector } from "react-redux";
import Loader from "../utils/Loader";
const Body = () => {
    let [allCoins,setAllCoins]=useState([]);
    let [displayCoins,setDisplayCoins]=useState([]);
    let [filterCoins,setFilterCoins]=useState([]);
    let currency=useSelector((store)=>store.coin.currency);
    let handelCrypto=(crypto)=>{
      if (crypto === "") {
        setFilterCoins([]);
      } else {
        let coins = allCoins.filter((coin) => coin.name === crypto);
        setFilterCoins(coins);
      }
    }
   useEffect(()=>{
     getData();
   },[currency])
    
   useEffect(()=>{
    let coins=allCoins.slice(0,10);
    setDisplayCoins(coins);
    },[allCoins])

   let getData=async ()=>{
    let data=await fetch(COINGECKO_API_URL+`=${currency}`,OPTIONS);
    let response=await data.json();
    setAllCoins(response);
    }
   if(allCoins.length===0 && displayCoins.length===0){return <Loader/>}
  return (
     <div>
      <div className='w-[500px] mx-auto mt-20'>
      <h1 className='text-white font-bold text-5xl text-center'>Largest Crypto Marketplace</h1>  
      <p className='text-white my-6 w-full text-center'>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
      <div className='w-[400px] mx-auto  bg-white px-4 py-3 rounded-md'>
       <select name="" id="" className="outline-none w-full" onChange={(e) =>handelCrypto(e.target.value)}>
       <option value="" className="py-2 px-4 text-sm text-black font-medium">Select your crypto</option>
       {
        allCoins.map((coins,index)=><option value={coins.name} key={index} className="py-2 px-4 text-sm text-black font-medium">{coins.name}</option>)
       }
       </select>
      </div>
      </div>
      <div className="w-[800px] mx-auto mt-10 bg-blue-950  py-3 rounded-md">
        <div className="flex gap-4 items-center px-2 py-3 text-white  font-semibold border-b border-gray-600">
         <h1 className="w-1/12 text-center">Rank</h1>
         <h1 className="w-1/3 text-left">Coins</h1>
         <h1 className="w-1/6 text-center">Price</h1>
         <h1 className="w-1/6 text-center">24H Change</h1>
         <h1 className="w-1/3 text-center">Market Cap</h1>
        </div>

        {
          filterCoins.length===0?displayCoins.map((coin,index)=><CoinCard coin={coin} currency={currency} key={index} />):
          filterCoins.map((coin,index)=><CoinCard coin={coin} currency={currency} key={index} />)
          
        }

      </div>
      </div>
  )
}

export default Body;