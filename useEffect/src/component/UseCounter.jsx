import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title=`clicked ${count} times`
    console.log("hello")
  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}
