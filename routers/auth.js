const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const UserEvent = require("../models").userEvent;
const Event = require("../models").event;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

// F4: User can login and see the dashboard
// http POST :4000/auth/login email=koen@koen.com password=koen
// http POST :4000/auth/login email=miriam@miriam.com password=miriam
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    // F11: User can't login yet when is not accepted by admin
    const accepted = user.accepted;
    console.log("Accepted? ", accepted);
    if (accepted === false) {
      return res
        .status(400)
        .send({ message: "Administator didn't confirm your sign up yet :)" });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, user: user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// F3: User sign up incl. creating all the profile information
// http POST :4000/auth/signup firstName=Koen lastName=Wisse email=koen@koen.com password=koen line=Staff position="Beer deliverer" backNumber=47 image=""
router.post("/signup", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    line,
    position,
    backNumber,
    image,
  } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      line,
      position,
      backNumber,
      image,
      teamId: 1, // Hardcoded for now because there is only 1 team.
      isAdmin: false,
      accepted: false,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    // F11: User can't login yet when is not accepted by admin
    res.status(201).json({
      message:
        "Thanks for registering, the administrator will review your application and let you know :)",
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
// - F5: Checking all events where I specified my participation
// http :4000/auth/me Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjcxNzQ2NCwiZXhwIjoxNjYyNzI0NjY0fQ.S78xXgTC3bmm2bUqFneX1eKrkBW9PMHiwLTdwRtQaj0"
router.get("/me", authMiddleware, async (req, res) => {
  const myParticipation = await UserEvent.findAll({
    where: {
      userId: req.user.id,
      participation: [true, false],
    },
  });

  // F10:
  // Check all events where my participation === true
  const mySchedule = await UserEvent.findAll({
    where: {
      userId: req.user.id,
      participation: true,
    },
    include: [Event],
  });
  // Map over mySchedule, and only send the events (the data I need to display).
  const scheduleOnlyEvents = mySchedule.map((s) => s.event);

  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({
    ...req.user.dataValues,
    myParticipation,
    mySchedule: scheduleOnlyEvents,
  });
});

module.exports = router;
