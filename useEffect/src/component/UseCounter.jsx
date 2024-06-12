import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);
  useEffect( )
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}
