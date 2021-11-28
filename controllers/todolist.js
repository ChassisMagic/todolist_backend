const Models = require("../models");

module.exports = {
  addTooList: async (req, res, next) => {
    try {
      const createTodoList = await Models.todoList.create(req.body);
      if (createTodoList) {
        return res.status(200).json("Created successfully!");
      }
    } catch (error) {
      return res.status(400).json("Created failed!");
    }
  },
  deleteTodoList: async (req, res, next) => {},
  getAllTodolist: async (req, res, next) => {},
  updatedTodolist: async (req, res, next) => {},
};
