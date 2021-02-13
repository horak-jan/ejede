const express = require("express");
const Car = require("../controllers/car");

const router = express.Router();

//INDEX
router.get("/", Car.index);

//STORE
router.post("/", Car.store);

//SHOW
router.get("/:id", Car.show);

//UPDATE
router.put("/:id", Car.update);

//DELETE
router.delete("/:id", Car.destroy);

module.exports = router;
