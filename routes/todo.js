const db = require("../models");
const router = require("express").Router();

router.get("/", async (req, res) => {
   const allTodos = await db.Todo.findAll();
   res.status(200).send(allTodos);
});



router.get("/:id", async (req, res) => {
   const targetId = req.params.id
   const targetTodo = await db.Todo.findOne({ where: {id: targetId} });
   res.status(200).send(targetTodo)
});



router.post("/", async(req, res) => {
   const { task } = req.body;
   const newTodo = await db.Todo.create({task});
   res.status(201).send(newTodo);
});



router.put("/:id", async(req, res) => {
   const targetId = req.params.id;
   const { task } = req.body;
   const targetTodo = await db.Todo.findOne({ where: {id: targetId} });

   if (targetTodo) {
      targetTodo.update({ task });
      res.status(200).send({message: `Todo ID: ${targetId} has been updated.`})
   } else {
      res.status(404).send({message: `Not found ID: ${targetId}`});
   }
});



router.delete("/:id", async(req, res) => {
   const targetId = req.params.id;
   const targetTodo = await db.Todo.findOne({ where: {id: targetId} });

   if (targetTodo) {
      targetTodo.destroy();
      res.status(200).send({message: `Todo ID: ${targetId} has been delete.`})
   } else {
      res.status(404).send({message: `Not found ID: ${targetId}`});
   }

});


module.exports = router;