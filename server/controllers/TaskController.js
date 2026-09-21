const Task = require("../models/Task");
const mongoose = require("mongoose");
const TaskController = {
  index: async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    return res.json(tasks);
  },
  store: async (req, res) => {
    const { title, description, status } = req.body;
    const task = await Task.create({
      title,
      description,
      status,
    });
    return res.json(task);
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: " not a valid ID" });
      }
      const task = await Task.findByIdAndUpdate(id, {
        ...req.body,
      });
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = TaskController;
