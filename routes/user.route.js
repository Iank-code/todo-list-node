const User = require("./../models/User.model");
const Todo = require("./../models/Todo.model");

const router = require("express").Router();

// GET request
router.get("/", async function (req, res) {
  try {
    const allUsers = await User.find({}).populate("todos");

    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
  }
});

// POST request
router.post("/", function (req, res) {
  try {
    const { name } = req.body;

    const newUser = new User({
      name,
    });

    newUser.save();

    res.status(200).json(newUser);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
});

// GET /:id
router.get("/:id", async function (req, res) {
  try {
    const id = req.params.id;

    const findUser = await User.findById(id).populate("todos");
    if (!findUser) {
      res.status(404).json({
        message: "Couldn't find a Todo with that id",
      });
    }
    
    res.status(200).json(findUser);
  } catch (error) {
    console.log(error);
  }
});

// // PUT/PATCH /:id
// router.put("/:id", async function (req, res) {
//   try {
//     const id = req.params.id;
//     const data = req.body.newName;

//     const updateTodo = await Todo.findById(id);
//     if (!updateTodo) {
//       res.status(404).json({
//         message: "Couldn't find a Todo with that id",
//       });
//     }
//     updateTodo.todo = data;

//     updateTodo.save();
//     res.status(200).json({
//       message: "Todo updated successfully",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.patch("/:id", async function (req, res) {
//   try {
//     const id = req.params.id;
//     const data = req.body.newName;

//     const updateTodo = await Todo.findById(id);
//     if (!updateTodo) {
//       res.status(404).json({
//         message: "Couldn't find a Todo with that id",
//       });
//     }
//     updateTodo.todo = data;

//     updateTodo.save();
//     res.status(200).json({
//       message: "Todo updated successfully",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// // DELETE /:id
// router.delete("/:id", async function (req, res) {
//   try {
//     const deleteTodo = await Todo.findByIdAndDelete(req.params.id);
//     if (!deleteTodo) {
//       res.status(404).json({
//         message: "Couldn't find a Todo with that id",
//       });
//     }
//     res.status(204).json("Todo has been deleted successfully");
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
