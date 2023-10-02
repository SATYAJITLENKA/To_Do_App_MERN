import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    "task":String
})

 const todoModel=mongoose.model('todo',todoSchema);

 export default todoModel;