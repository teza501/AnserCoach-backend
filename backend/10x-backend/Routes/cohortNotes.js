const router = require("express").Router();

const { addValidator } = require("../Validators/cohortNotes");
const { addNotes, getNotes,deleteNotes} = require("../Controllers/cohortNotes");
//const { adminAuth } = require("../Middlewares/auth");

router.post("/addnotes", addValidator, addNotes);
router.get("/show", getNotes);
router.delete("/:id", deleteNotes);

module.exports = router;
