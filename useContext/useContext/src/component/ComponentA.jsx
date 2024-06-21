import React, { useContext } from 'react'
import { UserContext } from '../App'
export default function ComponentA() {
  
  const user=useContext(UserContext);
  return (
    <div>
        {/* <UserContext.Consumer>
        {
            rajesh=>{
                return <div>user component value {rajesh.name}</div>
            }
        }
        {/* this function is render prop */}
        {/* </UserContext.Consumer> */}  
        {/* <div>user component value {user.name}</div> */}
    </div>
  )
}


// user=>{
//     return (
//       <ChannelContext.Consumer>
//         {
//           channerl=>{return <div> {} {}</div>}
//         }
//       </ChannelContext.Consumer>
//     )
// }