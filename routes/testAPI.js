var express = require("express");
var router = express.Router();

router.post("/transformText", function(req, res) {
    var text = req.body.text
    if (text.length > 0)
      text = text.toUpperCase();
    res.send(text);
});

module.exports = router;
