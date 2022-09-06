const { Router } = require("express");
const Team = require("../models").team;
const Player = require("../models").user;
// const authMiddleware = require("../auth/middleware");
const router = new Router();

// F1 - GET all players incl. corresponding team - http GET :4000/players
router.get("/", async (req, res, next) => {
  try {
    const allPlayers = await Player.findAll({
      include: [
        {
          model: Team,
          attributes: ["name"],
        },
      ],
      attributes: { exclude: ["password"] },
    });
    res.send(allPlayers);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
