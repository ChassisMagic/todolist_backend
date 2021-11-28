const { response } = require("express");
const Models = require("../models");

module.exports = {
  addTodoList: async (req, res, next) => {
    try {
      const { title, activity, completed } = req.body;
      const addTodoList = await Models.todoList.create({
        title,
        activity,
        completed
      });
      if (addTodoList) {
        return res.status(200).json({msg:"Created successfully!", data:addTodoList});
      }
    } catch (error) {
      return res.status(400).json({msg:"Create failed!"});
    }
  },
  deleteTodoList: async (req, res, next) => {
    try {
      const { id } = req.body;
      const deleteTodoList = await Models.todoList.destroy({
        where : {
          id
        }
      })
      if (deleteTodoList) {
        return res.status(200).json({msg: "Delete Successfully"})
      }
    } catch (error) {
      return res.status(400).json({msg:"Delete failed!"});
    }
  },
  getAllTodoList: async (req, res, next) => {
    try {
      const getAllTodoList = await Models.todoList.findAll();
      if(getAllTodoList) {
        return res.status(200).json({msg: "Fetch successfull", data: getAllTodoList})
      }
    } catch (error) {
      return res.status(400).json({msg: "Failed to fetch data",error})
    }
  },
  updateTodoList: async (req, res, next) => {
    try {
      const {id, title, activity, completed} = req.body;
      const updateTodoList = await Models.todoList.update({
        title,
        activity,
        completed
      }, {
        where: {
          id
        }
      })

      if (updateTodoList) {
        return res.status(200).json({
          msg: "Update Successful",
          data: updateTodoList
        })
      } 
    } catch (error) {
      return res.status(400).json({msg: "Failed to update data"}, error)
    }
  },
};
