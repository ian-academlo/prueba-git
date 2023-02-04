const { Router } = require("express");
const { getFriendById, getFriends } = require("../controllers/ian.controllers");

const router = Router();

router.get("/friends", getFriends);
router.get("/friends/:id", getFriendById);

module.exports = router;
