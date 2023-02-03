const { Router } = require("express");

const router = Router();

router.get("/nueva", (req, res) => {
  res.send("hola nueva");
});

module.exports = router;
