
import React, { useState } from 'react'
import { RxCross1 } from "react-icons/Rx";
import axios from 'axios';


const EditC = ({setPopUp,popContent}) => {

const[input,setInput]=useState(popContent.task)


const updatePopUp=()=>{
  axios
  .put(`http://localhost:4000/api/put/${popContent.id}`, { task: input })
  .then((res) => console.log(res.data));
  setPopUp(false)
 
}





  return (
    <>
    <div className='fixed top-0 left-0 w-[100%] h-[100vh] grid  '>
    <div className='w-[80%] bg-gray-300 m-auto rounded-xl '>
        
        <RxCross1 onClick={()=>setPopUp(false)} className='bg-gray-400 rounded-md cursor-pointer ' />
        
        <input
            type="text"
            placeholder="Edit your task"
            className="border p-4 mr-1 rounded-lg my-3 w-[70%]   border-black"
            onChange={(e)=>setInput(e.target.value)}
            value={input}
            onClick={updatePopUp}            
          />
          <button className="border border-black  bg-purple-400 p-4 rounded-lg hover:bg-purple-600 font-[500]" onClick={updatePopUp}>Save</button>
         
    </div>
    </div>
    </>
  )
}

export default EditC