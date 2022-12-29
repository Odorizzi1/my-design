const express = require('express');
const taskController = require('../controller/taskController');
const routes = express.Router();

routes.get("/task", taskController.index)
routes.post("/taskCreate", taskController.create)
routes.get("/task/:_id", taskController.getById)
routes.delete("/deleteTask/:_id", taskController.delete)
routes.put("/update", taskController.update)

module.exports = routes;