import React from "react";
import "./App.css";
import ComponentA from "./component/ComponentA";
import Couner from "./component/Couner";
export const UserContext = React.createContext();
function App() {
  return ( 
    <>
      {/* <UserContext.Provider value={{ name: "lund"}}>
        <ComponentA/>
      </UserContext.Provider> */}
      <Couner/>
    </>
  );
}

export default App;
