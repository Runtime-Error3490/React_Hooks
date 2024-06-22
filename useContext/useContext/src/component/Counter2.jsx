import React, { useContext, useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + 1 };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - 1 };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + 5 };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - 5 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export default function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div style={{ color: "white" }}>
        {count.firstCounter} {""} {count.secondCounter}
      </div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "increment2" })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: "decrement2" })}>
        Decrement2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

//step4: 
// in the function componentA
// const CountContext=useContext(CountContext);
// <button onClick={()=>CountContext.countDispatch('increment')}>Increment</button>