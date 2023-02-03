const { Router } = require("express");
const { getFriendById } = require("../controllers/ian.controllers");

const router = Router();

router.get("/friends/:id", getFriendById);

module.exports = router;
