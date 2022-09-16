const { Router } = require("express");
const Team = require("../models").team;
const router = new Router();

// F2: http GET :4000/teams
router.get("/", async (req, res, next) => {
  try {
    const team = await Team.findAll();
    res.send(team);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
