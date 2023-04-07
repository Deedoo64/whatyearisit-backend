var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/year", (req, res) => {
  const date = new Date();
  res.json({ year: date.getFullYear() });
});

module.exports = router;
