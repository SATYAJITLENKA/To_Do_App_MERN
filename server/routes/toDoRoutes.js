import { Router } from "express";

import { postTodo, gettodo, putTodo,deleteTodo } from "../controller/todoController.js";

const router = Router();

router.get("/get", gettodo);
router.post("/post", postTodo);
router.put("/put/:id", putTodo);
router.delete("/delete/:id", deleteTodo);

export default router;
