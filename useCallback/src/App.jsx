import { Component, useCallback } from 'react'
import './App.css'
import Counter from './component/Counter'
import FocusInput from './component/FocusInput'

function App() {
  return (
    <>
     {/* <Counter/> */}
     <FocusInput/>
    </>
  )
}

export default App
//we need to stop re rendiering of the component which are not 
//required to re render so we use React.memo hook


// export default React.memo(App) only re render when there is 
//change in props or state of the component

// function are re rendered when though there is no change in the props

//useCalback is a hook that will return a memoized version of the
//callback function that only changes if one of the dependencies has changed


// const incrementAge=useCallback(()=>{
//   setAge(age+1)
// },[age])

// why we use it?
// it is useful when passing callbacks to optimized child Component that 
// rely on reference equality to prevent unnecessary renders.