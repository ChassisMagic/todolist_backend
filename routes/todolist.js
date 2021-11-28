const express = require("express");
const router = express.Router();
const todolistController = require("../controllers/todolist");

router.post("/todolist", todolistController.addTodoList);
router.get("/todolist", todolistController.getAllTodoList);
router.put("/todolist", todolistController.updateTodoList);
router.delete("/todolist", todolistController.deleteTodoList);

module.exports = router;
