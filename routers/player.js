const { Router } = require("express");
const Team = require("../models").team;
const Player = require("../models").user;
const authMiddleware = require("../auth/middleware");
const router = new Router();

// F1: GET all players incl. corresponding team - http GET :4000/players
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

// F11: As an admin, I'm able to ACCEPT new registrations, to prevent that everybody can join our team
// http PATCH :4000/players/35 accepted=true Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJpYXQiOjE2NjMxNDY4NTEsImV4cCI6MTY2MzE1NDA1MX0.Zy3HQZnnhPDz-LoetNQ4jrksPZIuu3HPcvreYVwx3LI"
router.patch("/:id", authMiddleware, async (req, res, next) => {
  try {
    // Check if user is an admin
    if (req.user.isAdmin !== true) {
      return res.status(403).send({
        message: "You are not authorized to update a players sign up",
      });
    }

    const id = req.params.id;
    const playerToUpdate = await Player.findByPk(id);

    if (!playerToUpdate) {
      res.status(404).send({ message: "Player not found!" });
    } else {
      const updatedPlayer = await playerToUpdate.update(req.body);
      return res
        .status(200)
        .send({ message: "Player accepted", updatedPlayer });
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// F11: As an admin, I'm able to DELETE new registrations, to prevent that everybody can join our team
// http DELETE :4000/players/37 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MzE1NjQ2OCwiZXhwIjoxNjYzMTYzNjY4fQ.DVQOqCjKW_3EWp4hltmVuONMpkEpDgCRsgGsJLoaa-Q"
router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    if (req.user.isAdmin !== true) {
      return res.status(403).send({
        message: "You are not authorized to delete a players sign up",
      });
    }

    const id = parseInt(req.params.id);
    const playerToDelete = await Player.findByPk(id);
    if (!playerToDelete) {
      res.status(404).send("This player is not found!");
    } else {
      const deletedPlayer = await playerToDelete.destroy();
      return res.status(204).send({ message: "Players sign up is deleted!" });
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
