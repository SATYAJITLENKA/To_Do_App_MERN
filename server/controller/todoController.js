import todoModel from "../model/todoModel.js";

const gettodo = async (req, res) => {
  const toDos = await todoModel.find();
  res.status(201).send(toDos);
};

const postTodo = async (req, res) => {
  const toDos = req.body;
  const newToDo = new todoModel(toDos);
  const saveData = await newToDo.save();
  res.status(201).send(saveData);
};

const putTodo = async (req, res) => {
  const { id } = req.params;
 
  let toDo = req.body;

  await todoModel.findByIdAndUpdate(id, toDo);
  res.status(201).send("updatedData....");
};

const deleteTodo = async(req,res) => {
 const { id } = req.params;
  
 

  await todoModel.findByIdAndDelete(id);
  res.status(201).send("deleted Data....");
};

export { gettodo, postTodo, putTodo, deleteTodo };
