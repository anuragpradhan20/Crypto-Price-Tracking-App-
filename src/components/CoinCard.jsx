import React from 'react'
import { CURRENCY_SYMBOL } from '../utils/data';
import { Link } from 'react-router-dom';

const CoinCard = ({coin,currency}) => {
  const symbol = CURRENCY_SYMBOL[currency.toLowerCase()];
  return <Link to={`/coin/${coin.id}`}>
    <div className='flex items-center justify-between border-b border-gray-600 py-4  text-white'>
     <p className="w-1/12 text-center font-semibold">{coin?.market_cap_rank}</p>
     <p className='w-1/3 text-center flex items-center gap-2 font-semibold'><img src={coin?.image} alt="" className='w-10'/>{coin?.name}-{coin?.symbol}</p>
     <p className='w-1/6 text-center font-semibold'>{symbol} {coin?.current_price.toLocaleString()}</p>
     <p className={`w-1/6 text-center font-semibold ${coin?.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>{Math.floor(coin?.price_change_percentage_24h*100)/100}</p>
     <p className='w-1/3 text-center font-semibold'>{symbol} {coin?.market_cap.toLocaleString()}</p>
    </div>
  </Link>
}

export default CoinCard;