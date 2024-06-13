import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display,setDiaplay]=useState(true)
  return (
    <div>
        <button onClick={()=>setDiaplay(!display)}>Toggle Display</button>
        {
            display&& <HookMouse/>
        }
    </div>
  )
}

export default MouseContainer