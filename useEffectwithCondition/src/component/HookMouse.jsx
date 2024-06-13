import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMousePosition=(event)=>{
        setX(event.clientX)
        setY(event.clientY)
    }
    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            console.log("Component unmounting code")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div>
        Hook x -{x} Hook y -{y}
    </div>
  )
}

export default HookMouse