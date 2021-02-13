const express = require("express");

const Booking = require("../controllers/booking");
const router = express.Router();

//STORE
router.post("/", Booking.store);

//INDEX
router.get("/", Booking.index);

//SHOW
router.get("/:id", Booking.show);

//UPDATE
router.put("/:id", Booking.update);

//DELETE
router.delete("/:id", Booking.destroy);

module.exports = router;
