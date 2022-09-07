"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "miriam@miriam.com",
          password: bcrypt.hashSync("miriam", 10),
          firstName: "Miriam",
          lastName: "van den Bosch",
          line: "Midfield",
          position: "Right midfielder",
          backNumber: 14,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556304/EDO%20VR1/Miriam_p3q0od.jpg",
          isAdmin: true,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "britt@britt.com",
          password: bcrypt.hashSync("britt", 10),
          firstName: "Britt",
          lastName: "de Jong",
          line: "Defense",
          position: "Central defender",
          backNumber: 13,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556302/EDO%20VR1/Britt_g4urlc.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "charlotte@charlotte.com",
          password: bcrypt.hashSync("charlotte", 10),
          firstName: "Charlotte",
          lastName: "Koerts",
          line: "Goal",
          position: "Goalkeeper",
          backNumber: 23,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556302/EDO%20VR1/Charlotte_nirhce.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "claire@claire.com",
          password: bcrypt.hashSync("claire", 10),
          firstName: "Claire",
          lastName: "Vermeer",
          line: "Goal",
          position: "Goalkeeper",
          backNumber: 1,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556302/EDO%20VR1/Claire_bcvvq6.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "claudia@claudia.com",
          password: bcrypt.hashSync("claudia", 10),
          firstName: "Claudia",
          lastName: "van Engelenburg",
          line: "Defense",
          position: "Central defender",
          backNumber: 5,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556303/EDO%20VR1/Claudia_sdlggr.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "danike@danike.com",
          password: bcrypt.hashSync("danike", 10),
          firstName: "Danike",
          lastName: "Peters",
          line: "Defense",
          position: "Right defender",
          backNumber: 3,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556303/EDO%20VR1/Danike_kldnty.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "esra@esra.com",
          password: bcrypt.hashSync("esra", 10),
          firstName: "Esra",
          lastName: "van Bussel",
          line: "Attack",
          position: "Striker",
          backNumber: 11,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556303/EDO%20VR1/Esra_mik8bh.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "ester@ester.com",
          password: bcrypt.hashSync("ester", 10),
          firstName: "Ester",
          lastName: "Bosman",
          line: "Midfield",
          position: "Central midfielder",
          backNumber: 7,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556303/EDO%20VR1/Ester_hyktes.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "iris@iris.com",
          password: bcrypt.hashSync("iris", 10),
          firstName: "Iris",
          lastName: "Knuvers",
          line: "Defense",
          position: "Left defender",
          backNumber: 2,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556303/EDO%20VR1/Iris_detk9o.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "kaylie@kaylie.com",
          password: bcrypt.hashSync("kaylie", 10),
          firstName: "Kaylie",
          lastName: "de Pundert",
          line: "Defense",
          position: "Right defender",
          backNumber: 18,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556303/EDO%20VR1/Kaylie_u9kzfh.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "kyra@kyra.com",
          password: bcrypt.hashSync("kyra", 10),
          firstName: "Kyra",
          lastName: "van Bussel",
          line: "Defense",
          position: "Left defender",
          backNumber: 25,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556303/EDO%20VR1/Kyra_uv8fdd.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "marianne@marianne.com",
          password: bcrypt.hashSync("marianne", 10),
          firstName: "Marianne",
          lastName: "Timmer",
          line: "Attack",
          position: "Right winger",
          backNumber: 24,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556303/EDO%20VR1/Marianne_xzblx4.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "miranda@miranda.com",
          password: bcrypt.hashSync("miranda", 10),
          firstName: "Miranda",
          lastName: "Stijlaart",
          line: "Attack",
          position: "Left winger",
          backNumber: 9,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556304/EDO%20VR1/Miranda_hpiwdg.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "merel@merel.com",
          password: bcrypt.hashSync("merel", 10),
          firstName: "Merel",
          lastName: "Bekker",
          line: "Defense",
          position: "Central defender",
          backNumber: 8,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556303/EDO%20VR1/Merel_qn5v45.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "paulien@paulien.com",
          password: bcrypt.hashSync("paulien", 10),
          firstName: "Paulien",
          lastName: "Kamphuis",
          line: "Midfield",
          position: "Central midfielder",
          backNumber: 10,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556304/EDO%20VR1/Paulien_vm68t1.jpg",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "rik@rik.com",
          password: bcrypt.hashSync("rik", 10),
          firstName: "Rik",
          lastName: "de Groot",
          line: "Staff",
          position: "Coach",
          backNumber: null,
          image:
            "https://res.cloudinary.com/dxkac5ukc/image/upload/v1662556304/EDO%20VR1/Rik_ynemal.png",
          isAdmin: false,

          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
