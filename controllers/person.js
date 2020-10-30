const db = require("../models");

const getAllPersons = async (req, res) => {
   try {
      const allPerson = await db.Person.findAll( {include: [db.Todo]});
      res.status(200).send(allPerson);
   } catch (err) {
      res.status(500).send({message: err.message})
   }
};

const getAllPersonsById = async (req, res) => {
   const targetId = req.params.id
   const targetPerson = await db.Person.findOne({ where: {id: targetId}, include: [db.Todo] });
   res.status(200).send(targetPerson)
};

const createPerson = async (req, res) => {
   const { name, age, todoss } = req.body;
   const newPerson = await db.Person.create({name, age, Todos: todoss }, { include: [db.Todo]});
   res.status(201).send(newPerson);
};

const updatePerson = async (req, res) => {
   const targetId = req.params.id;
   const { name, age } = req.body;
   const targetPerson = await db.Person.findOne({ where: {id: targetId} });

   if (targetPerson) {
      targetPerson.update({ name, age });
      res.status(200).send({message: `Person ID: ${targetId} has been updated.`})
   } else {
      res.status(404).send({message: `Not found ID: ${targetId}`});
   }
};

const deletePerson = async (req, res) => {
   const targetId = req.params.id;
   const targetPerson = await db.Todo.findOne({ where: {id: targetId} });

   if (targetPerson) {
      targetPerson.destroy();
      res.status(204).send({message: `Person ID: ${targetId} has been delete.`})
   } else {
      res.status(404).send({message: `Not found ID: ${targetId}`});
   }
};

module.exports = {
   getAllPersons,
   getAllPersonsById,
   createPerson,
   updatePerson,
   deletePerson,
}