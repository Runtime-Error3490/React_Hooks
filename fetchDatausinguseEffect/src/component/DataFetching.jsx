import React, { useEffect, useState } from "react";
import axios from "axios";
export default function DataFetching() {
  const [post, setPost] = useState({});
  const [id,setID]=useState(1);
  const[idFromButtonClick,setIdFromButtonCLick]=useState(1)
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
       setPost(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  },[idFromButtonClick]);
  const handleClick=()=>{
    setIdFromButtonCLick(id);
  }
  return (
    <div>
    <input type="text" value={id} onChange={e=>setID(e.target.value)}/>
    <button onClick={handleClick}>Fetch Post</button>
      <ul>
        {/* {post.map((pos) => (
          <li key={pos.id}>{pos.title}</li>
        ))} */}
        <li>{post.title}</li>
      </ul>
    </div>
  );
}
