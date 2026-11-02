import { useState } from "react";

function State() {
  
  const isAdmin = false
  

if(isAdmin){
  return(<h1>Hello Admin</h1>)
} else {
  return(<h1>hello user</h1>)
}

}


export default State;
