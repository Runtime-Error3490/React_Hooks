import React from "react";
import "./App.css";
import ComponentA from "./component/ComponentA";
import Couner from "./component/Couner";
import Counter2 from "./component/Counter2";
export const UserContext = React.createContext();

//ste3:
export const CountContext = React.createContext();

///step1:
// const initialState=0;
// const reducer=(state,action)=>{
//   switch(action){
//     case "increment":
//       return state+1;
//     case "decrement":
//       return state-1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// }

function App() {
  const [count, dispatch] = useReducer(reducer, initialState); //step2

  return (
    <>
      <CountContex.Provider value={{countState:count,countDispatch:dispatch}}>
        {/* <UserContext.Provider value={{ name: "lund"}}>
        <ComponentA/>
      </UserContext.Provider> */}
        <Counter2 />
      </CountContex.Provider>
    </>
  );
}

export default App;
