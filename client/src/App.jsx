import { useEffect, useState } from "react";;
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
  axios.get('http://localhost:4000/api/get')
  .then((res)=>{
    setData(res.data)
  })
  },[])

  

  return (
    <>
      <div>
        <h1 className="text-[40px] font-bold ">ToDo App</h1>
        <input
          type="text"
          placeholder="enter your task"
          className="border p-2 mr-1 rounded-lg my-11   border-black"
        />
        <button className="border border-black bg-purple-400 p-2 rounded-lg">
          Submit
        </button>
      </div>

      <div className=" bg-[pink] mt-4">
        {
          data.map((task)=>{
            console.log(task.task)
            return <p className="bg-[green] w-[80%] mt-2">{task.task}</p>
          })
        }
       
      </div>
    </>
  );
}

export default App;
