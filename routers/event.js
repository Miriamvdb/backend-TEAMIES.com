const { Router } = require("express");
const Category = require("../models").category;
const Event = require("../models").event;
const router = new Router();

// F2 - GET all events incl. corresponding category - http GET :4000/events
router.get("/", async (req, res, next) => {
  try {
    const allEvents = await Event.findAll({
      include: [Category],
    });
    res.send(allEvents);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
