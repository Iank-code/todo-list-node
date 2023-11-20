const { reset } = require("nodemon");
const Todo = require("./../models/Todo.model");

const router = require("express").Router();

// GET request
router.get("/", async function (req, res) {
  try {
    const allTodos = await Todo.find({});

    res.status(200).json(allTodos);
  } catch (error) {
    console.log(error);
  }
});

// POST request
router.post("/", function (req, res) {
  try {
    const data = req.body.todo;

    const newTodo = new Todo({
      todo: data,
    });

    newTodo.save();

    res.status(200).json(newTodo);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});

// GET /:id
router.get("/:id", async function (req, res) {
  try {
    const id = req.params.id;

    const findTodo = await Todo.findById(id);
    if (!findTodo) {
      res.status(404).json({
        message: "Couldn't find a Todo with that id",
      });
    }
    res.status(200).json(findTodo);
  } catch (error) {
    console.log(error);
  }
});

// PUT/PATCH /:id
router.put("/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const data = req.body.newName;

    const updateTodo = await Todo.findById(id);
    if (!updateTodo) {
      res.status(404).json({
        message: "Couldn't find a Todo with that id",
      });
    }
    updateTodo.todo = data;

    updateTodo.save();
    res.status(200).json({
      message: "Todo updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

router.patch("/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const data = req.body.newName;

    const updateTodo = await Todo.findById(id);
    if (!updateTodo) {
      res.status(404).json({
        message: "Couldn't find a Todo with that id",
      });
    }
    updateTodo.todo = data;

    updateTodo.save();
    res.status(200).json({
      message: "Todo updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

// DELETE /:id
router.delete("/:id", async function (req, res) {
  try {
    const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deleteTodo) {
      res.status(404).json({
        message: "Couldn't find a Todo with that id",
      });
    }
    res.status(204).json("Todo has been deleted successfully");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

/**
 * Todo List
 * {
 *  id: 1, unique,
 *  name: "updated",
 *  description: "",
 *  created_at: "2015-12-01T00:00:00",
 *  updated_at: "2015-12-01T00:00:00"
 * }
 *
 * @Authentication
 * {
 *  id: 1, unique,
 *  email: "updated@gmail.com",
 *  password: "updated"
 *  created_at: "2015-12-01T00:00:00",
 *  updated_at: "2015-12-01T00:00:00"
 * }
 */
