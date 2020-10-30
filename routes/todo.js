const router = require("express").Router();
const todoController = require("../controllers/todo");
const passport = require("passport");

const auth = passport.authenticate("jwt", { session: false });

router.get("/", auth, todoController.getAllTodos);
router.get("/:id", auth, todoController.getAllTodosById);
router.post("/",auth, todoController.createTodo);
router.put("/:id", auth, todoController.updateTodo);
router.delete("/:id",auth, todoController.deleteTodo);

module.exports = router;
