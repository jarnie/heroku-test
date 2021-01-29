const express = require("express");

var router = express.Router();

router.get("/1", (req, res) => {
  res.send({ id: 1, latitude: 60, longitude: 60 });
});

module.exports = router;
