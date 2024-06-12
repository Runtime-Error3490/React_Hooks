import React, { useState } from 'react'

export default function Hook2() {
    const initialCount=0;
    //second form of the set count

    //setCount((prev)=>prev+1)
    //if you want to update the value on the basis of the previous state value
    const [count, setCount] = useState(initialCount)
  return (
    <div>
        Count: {count}
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
        <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
    </div>
  )
}
