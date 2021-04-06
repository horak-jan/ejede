const express = require("express");
const Message = require("../controllers/message");

const router = express.Router();

//INDEX
router.get("/", Message.index);

//STORE
router.post("/", Message.store);

//SHOW
router.get("/:id", Message.show);

module.exports = router;
