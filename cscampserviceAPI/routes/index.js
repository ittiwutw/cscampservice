var express = require("express");
var cors = require("cors");
var punsuk = require("../controller/punsuk-controller");
var user = require("../controller/user-controller");


var request = require("request");
var btoa = require("btoa");

const router = express();
router.use(cors());
router.options("*", cors());

router.post("/login", (req, res) => {
  user.login(req).then(rows => {
    res.json(rows);
  });
});

router.post("/regisActivity", (req, res) => {
  user.regisActivity(req).then(rows => {
    res.json(rows);
  });
});

router.post("/getRegisActivityByUserId", (req, res) => {
  user.getRegisActivityByUserId(req).then(rows => {
    res.json(rows);
  });
});

router.post("/getUserByActivityName", (req, res) => {
  user.getUserByActivityName(req).then(rows => {
    res.json(rows);
  });
});

router.post("/requestApprove", (req, res) => {
  user.requestApprove(req).then(rows => {
    res.json(rows);
  });
});

router.post("/approveRequest", (req, res) => {
  user.approveRequest(req).then(rows => {
    res.json(rows);
  });
});

router.post("/approveList", (req, res) => {
  user.approveList(req).then(rows => {
    res.json(rows);
  });
});

router.post("/voteUserByUserActivityId", (req, res) => {
  user.voteUserByUserActivityId(req).then(rows => {
    res.json(rows);
  });
});

module.exports = router;
