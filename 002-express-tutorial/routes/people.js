const express = require('express');
const router = express.Router();

const{getPeople, createPerson, createPersonPostman, updatePerson, deletePerson} = require("../controllers/people");

//this is one option of setting up routes
// router.get("/", getPeople);
// //POST with javascript version which uses axios
// router.post("/", createPerson);
// //POST test with POSTMAN
// router.post("/postman", createPersonPostman);
// //note, use postman to see results, we did not make a front end for this
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

//this ends up doing the same exact thing as the above, just differently
router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;