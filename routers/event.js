const { Router } = require("express");
const Category = require("../models").category;
const User = require("../models").user;
const UserEvent = require("../models").userEvent;
const Event = require("../models").event;
const authMiddleware = require("../auth/middleware");
const router = new Router();

// F2 - GET all events incl. corresponding category - http GET :4000/events
router.get("/", async (req, res, next) => {
  try {
    const allEvents = await Event.findAll({
      include: [
        Category,
        {
          model: User,
          as: "attendees",
          attributes: ["id", "firstName"],
          through: {
            as: "participating",
            attributes: ["participation"], // in model: userEvent, column: participation
          },
        },
      ],
    });
    res.send(allEvents);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// F5: User can specify participation
// http PATCH :4000/events/1/participation participation=false authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTY2MjYzNjU1MCwiZXhwIjoxNjYyNjQzNzUwfQ.UFDUq3qz9L4rKKmUi8Cphc64YOZzmT3SFLrYSxFpozw"
router.patch(
  "/:eventId/participation",
  authMiddleware,
  async (req, res, next) => {
    try {
      const eventId = req.params.eventId;
      const { participation } = req.body;
      if (participation === undefined) {
        res.status(400).send("Please provide participation");
        return;
      }
      const userEventToUpdate = await UserEvent.findOne({
        where: { eventId: eventId, userId: req.user.id },
      });
      if (userEventToUpdate) {
        userEventToUpdate.update({ participation });
      } else {
        await UserEvent.create({
          userId: req.user.id,
          eventId: eventId,
          participation: participation,
        });
      }
      return res.status(200).send({ message: "Participation updated" });
    } catch (e) {
      console.log(e.message);
      next(e);
    }
  }
);

module.exports = router;
