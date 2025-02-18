import {useEffect , useState} from 'react';

function UseCurrencyinfo(Currency) {
  const[data,setData]=useState({});
    useEffect(()=>{
      fetch (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${Currency}.json`)
      .then((Response)=>Response.json())
      .then((Response)=>setData(Response[Currency]))
      console.log(data);
      
    },[Currency, data])
    console.log(data);
    return data;
}
export default UseCurrencyinfo;