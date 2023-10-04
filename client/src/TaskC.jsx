import React from 'react'
import { AiFillDelete, AiFillEdit } from "react-icons/Ai";
import axios from 'axios'


const TaskC = ({task,id,setPopUp,setPopContent}) => {

    const deleteTask=()=>{
       
              
              axios.delete(`http://localhost:4000/api/delete/${id}`).then((res) => {
              console.log(res.data)
            });
        
    }
 const updateTodo=()=>{
  setPopContent({task,id});
  setPopUp(true);
 }




  return (
  
    <div className="bg-[#dcdcdc] w-[70%] my-3 font-[400] py-2 rounded-lg">
                <div className="flex cursor-pointer gap-2 justify-end px-3 ">
                  
                  <AiFillEdit onClick={updateTodo} />
                  <AiFillDelete className="text-[red]" onClick={deleteTask}/>
                </div>
                <p className="pb-2">{task}</p>
                
              </div>
             
  )
}

export default TaskC