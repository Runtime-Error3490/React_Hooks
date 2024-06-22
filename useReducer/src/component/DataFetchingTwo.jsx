import React, { useEffect, useReducer } from "react";
import axios from "axios";

const intitalState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_Success":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "Fetch_Error":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};
function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, intitalState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({
          type: "Fetch_Success",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "Fetch_Error",
        });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading..." : state.post.title}<br/>
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
