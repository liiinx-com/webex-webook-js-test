var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/webhook", function (req, res, next) {
  res.json({ ok: true });
});

router.post("/webhook", function (req, res, next) {
  res.json({ ok: true });
});

module.exports = router;
