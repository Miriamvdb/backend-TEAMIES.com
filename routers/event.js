const { Router } = require("express");
const Category = require("../models").category;
const User = require("../models").user;
const UserEvent = require("../models").userEvent;
const Event = require("../models").event;
const authMiddleware = require("../auth/middleware");
const router = new Router();

// F2: GET all events incl. corresponding category - http GET :4000/events
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
            attributes: ["participation", "isDriver"], // in model: userEvent, column: participation && isDriver
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
        await userEventToUpdate.update({ participation });
      } else {
        await UserEvent.create({
          userId: req.user.id,
          eventId: eventId,
          participation: participation,
        });
      }

      // F5: Amount of (updated) attendees
      const updatedEvent = await Event.findByPk(eventId, {
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

      const updatedAttendees = updatedEvent.attendees;

      return res
        .status(200)
        .send({ message: "Participation updated", updatedAttendees });
    } catch (e) {
      console.log(e.message);
      next(e);
    }
  }
);

// F7: Admin can create a new event
// http POST :4000/events/newevent/1 title=Training date="2022-10-24" startTime="19:15" endTime="20:45" Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjkxMDkwOSwiZXhwIjoxNjYyOTE4MTA5fQ.osVCdGfv817QaHFCJVIxjMeDhfnLEGp8tz0inxmpMro"
router.post("/newevent/:categoryId", authMiddleware, async (req, res, next) => {
  // Check if user is an admin
  if (req.user.isAdmin !== true) {
    return res
      .status(403)
      .send({ message: "You are not authorized to create a new event" });
  }

  const category = await Category.findByPk(req.params.categoryId);
  console.log(category);

  if (category === null) {
    return res.status(404).send({ message: "This category does not exist" });
  }

  const { title, date, startTime, endTime, opponent, home, descr } = req.body;

  if (!title || !date || !startTime || !endTime) {
    return res
      .status(400)
      .send("Please provide a title, date, start time and an end time");
  }

  try {
    const newEvent = await Event.create({
      userId: req.user.id,
      categoryId: category.id,
      title,
      date,
      startTime,
      endTime,
      opponent,
      home,
      descr,
    });

    return res.status(201).send({ message: "New event created", newEvent });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// F9: GET all events by id - http GET :4000/events/1
router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const eventById = await Event.findByPk(id, {
      include: [
        Category,
        {
          model: User,
          as: "attendees",
          attributes: ["id", "firstName"],
          through: {
            as: "participating",
            attributes: ["participation", "isDriver"], // in model: userEvent, column: participation
          },
        },
      ],
    });
    res.send(eventById);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// F12: Admin can delete event
// http DELETE :4000/events/2 authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE2NjM3NTEyNjQsImV4cCI6MTY2Mzc1ODQ2NH0.wxZ_1OIYWcCVP3SurgkBi6UN6imG27Tlth5nXtELjoo"
router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    if (req.user.isAdmin !== true) {
      return res.status(403).send({
        message: "You are not authorized to delete an event",
      });
    }

    const id = parseInt(req.params.id);
    const eventToDelete = await Event.findByPk(id);
    if (!eventToDelete) {
      res.status(404).send("This event is not found!");
    } else {
      const deletedEvent = await eventToDelete.destroy();
      return res.status(204).send({ message: "Event is deleted!" });
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// F14: Driver or not
// http PATCH :4000/events/1/drivers isDriver=true authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE1LCJpYXQiOjE2NjM4NDcwOTEsImV4cCI6MTY2Mzg1NDI5MX0.1PjRmUUjl2PEoQhNvu4ZoZgu282ca1BXJLwf8Fz4aJk"
router.patch("/:eventId/drivers", authMiddleware, async (req, res, next) => {
  try {
    const eventId = req.params.eventId;
    const { isDriver } = req.body;
    const userEventToUpdate = await UserEvent.findOne({
      where: { eventId: eventId, userId: req.user.id },
    });
    if (userEventToUpdate) {
      await userEventToUpdate.update({ isDriver });
    }

    return res.status(200).send({
      message: "Drivers updated",
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
