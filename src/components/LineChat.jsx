import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
const LineChat = ({coinHistoricalData}) => {
    const [data,setData]=useState([["Date","Prices"]])
    useEffect(()=>{
      let dataCopy=[["Date","Prices"]];
      if(coinHistoricalData && Array.isArray(coinHistoricalData.prices)){
        coinHistoricalData.prices.map((item)=>{
          dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
        })
        setData(dataCopy);
      }
    },[coinHistoricalData])
  return (
     <Chart chartType='LineChart' data={data} height='100%' width='100%' legendToggle>

     </Chart>
  )
}

export default LineChat;