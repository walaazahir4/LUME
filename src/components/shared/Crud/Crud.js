import axios from "axios";
import { useEffect } from "react";
function Crud() {
  
    const editUserData =  async () =>{
            try{
                   const hey = await axios.delete("https://jsonplaceholder.typicode.com/usersss/ss3")
                   console.log("تم حذف بيانات المشترك", hey.data)
            }catch(err){
                console.log(err)
            }
           
    }

  return (
    <>
      <button onClick={editUserData}>Edit data</button>
    </>
  );
}

export default Crud;
