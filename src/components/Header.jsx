import React from 'react'
import Logo from '../Images/logo.png'
import { Link } from 'react-router-dom';
import ArrowIcon from '../Images/arrow_icon.png'
import { useDispatch } from 'react-redux';
import { setCurrency } from '../utils/coinSlice';
const Header = () => {
  let currencyList=['usd','eur','inr'];
  let dispatch=useDispatch();
  let handelCurrency=(currency)=>{
      dispatch(setCurrency(currency));
  }
  return (
    <div className='px-10 py-5 flex items-center justify-around border-b-2 border-gray-500'>
       <Link to="/"><img src={Logo} alt="" className='w-30' /></Link>
       <div className='flex items-center gap-6 text-gray-300 text-base font-semibold'>
        <Link>Home</Link>
        <Link>Features</Link>
        <Link>Priceing</Link>
        <Link>Blog</Link>
       </div>
       <div className='flex gap-2 items-center'>
        <select name="" id="" className='bg-blue-950 px-3 py-1 font-semibold text-white border-2 rounded-md' onChange={(e) => handelCurrency(e.target.value)}>
          {currencyList.map((currency,index)=><option value={currency} key={index} className='text-base font-semibold px-1 rounded-md'>{currency.toUpperCase()}</option>  )}
          </select>
        <button type="button" className='flex items-center gap-2 bg-gray-100 rounded-2xl px-6 py-2 text-sm font-semibold'>Sign up <img src={ArrowIcon} alt=""/></button>
       </div>
    </div>
  )
}

export default Header;