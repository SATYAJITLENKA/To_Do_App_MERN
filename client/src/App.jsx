import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import TaskC from "./TaskC";
import EditC from "./EditC";

function App() {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState();
  const [popUp,setPopUp]=useState(false)
  const [popContent,setPopContent]=useState({})

  

  const getData = () => {
    axios.get("http://localhost:4000/api/get").then((res) => {
      setData(res.data);
    });
  };

  const handleSubmit = () => {
    if(postData){
      console.log(postData);
    axios
      .post("http://localhost:4000/api/post", { task: postData })
      .then((res) => {});
    setPostData("");
    }
    
  };

  

  useEffect(() => {
    getData();
  }, [handleSubmit]);

  const handleChange = (e) => {
    setPostData(e.target.value);
  };

  return (
    <>
      <div>
        <h1 className="text-[40px] font-bold mb-5 ">ToDo App</h1>
        <div>
          <input
            type="text"
            placeholder="enter your task"
            className="border p-2 mr-1 rounded-lg my-1 w-[70%]   border-black"
            onChange={handleChange}
            value={postData}
          />
          <br />
          <button
            onClick={handleSubmit}
            className="border border-black w-[70%] bg-purple-400 p-2 rounded-lg hover:bg-purple-600 font-[500]"
          >
            Submit
          </button>
        </div>

        <div className=" mt-11  flex flex-col justify-items-center items-center">
          {data.map((res) => {
            return <TaskC task={res.task} key={res._id} id={res._id} setPopUp={setPopUp} setPopContent={setPopContent}   />;
          })}
        </div>
      </div>
      <div>
        {popUp && < EditC setPopUp={setPopUp} popContent={popContent}  />}
        
      </div>
    </>
  );
}

export default App;
