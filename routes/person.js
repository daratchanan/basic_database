const router = require("express").Router();
const passport = require("passport");
const personController = require("../controllers/person");


const auth = passport.authenticate("jwt", { session: false });

router.get("/", auth, personController.getAllPersons);
router.get("/:id", auth, personController.getAllPersonsById);
router.post("/", auth, personController.createPerson);
router.put("/:id", auth, personController.updatePerson);
router.delete("/:id", auth, personController.deletePerson);

module.exports = router;