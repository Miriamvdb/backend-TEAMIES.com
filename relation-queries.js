const Team = require("./models").team;
const User = require("./models").user;
const Category = require("./models").category;
const Event = require("./models").event;

// Query 1: Get team, includes corresponding users (players)
async function teamWithUsers() {
  const responseQuery = await Team.findOne({
    include: [
      {
        model: User,
        attributes: ["firstName", "lastName"],
      },
    ],
  });
  return responseQuery.get({ plain: true });
}

// teamWithUsers().then((team) =>
//   console.log("Team with users (players): ", team)
// );

// Query 2: Get one user by id, includes corresponding events
async function userWithEvents(id) {
  const responseQuery = await User.findByPk(id, {
    include: [
      {
        model: Event,
        attributes: ["title"],
      },
    ],
  });
  return responseQuery.get({ plain: true });
}

// userWithEvents(1).then((user) => console.log("User with events: ", user));

// Query 3: Get event by id with corresponding category
async function categoryWithEvent(id) {
  const responseQuery = await Event.findByPk(id, {
    include: [
      {
        model: Category,
        attributes: ["name"],
      },
    ],
  });
  return responseQuery.get({ plain: true });
}

// categoryWithEvent(1).then((cat) => console.log("Category with event: ", cat));

// Query 4: Get event by id with corresponding attendees and organizer
async function eventsWithUsers(id) {
  const response = await Event.findByPk(id, {
    include: ["attendees", "organizer"],
  });
  return response;
}

// eventsWithUsers(1).then((event) => console.log(event.toJSON()));

// Query 5: Get user by id, with corresponding events
async function userWithEvents(id) {
  const response = await User.findByPk(id, {
    include: [{ model: Event }],
  });
  return response;
}

// userWithEvents(1).then((user) => console.log(user.toJSON()));
