import React, { useEffect, useState } from "react";

export default function IntervalHook() {
  const [count, setCount] = useState(0);
  const tick=()=>{
    setCount(count+1) 
    //setCount(count+1) wrong way of updating state
    // setCount(prev=>prev+1)
  }
  useEffect(()=>{
    const interval=setInterval(tick,1000);
    // console.log('interval created')
    return ()=>{
        // console.log('interval cleared')
        clearInterval(interval)
    }
  },[count])//empty array means it will run only once
  //this means that the effect will not look for the props and state as earlier
  return <div>{count}</div>;
}
// /In summary, setCount(prev => prev + 1) works correctly
//in your IntervalHook component even without specifying count 
//in the useEffect dependency array ([]) because React guarantees
// that the functional form of setState captures and uses the most
// recent state value (prev), ensuring consistent and predictable state
// updates. This pattern is recommended when you need to update state based 
//on its previous value in asynchronous scenarios like setInterval or setTimeout.