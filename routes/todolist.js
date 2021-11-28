const express = require("express");
const router = express.Router();
const todolistController = require("../controllers/todolist");

router.post("/todolist", todolistController.addTooList);
router.get("/todolist", todolistController.getAllTodolist);
router.put("/todolist", todolistController.updatedTodolist);
router.delete("/todolist", todolistController.deleteTodoList);

module.exports = router;
