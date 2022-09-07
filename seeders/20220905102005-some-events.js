"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          title: "Training",
          descr: "",
          date: new Date("2022-09-26"),
          startTime: "19:15",
          endTime: "20:45",
          opponent: null,
          home: null,

          userId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Training",
          descr: "",
          date: new Date("2022-09-28"),
          startTime: "19:15",
          endTime: "20:45",
          opponent: null,
          home: null,

          userId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Training",
          descr: "",
          date: new Date("2022-10-03"),
          startTime: "19:15",
          endTime: "20:45",
          opponent: null,
          home: null,

          userId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Training",
          descr: "",
          date: new Date("2022-10-05"),
          startTime: "19:15",
          endTime: "20:45",
          opponent: null,
          home: null,

          userId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Match", // EDO VR1 - DHSC VR1
          descr: "",
          date: new Date("2022-10-01"),
          startTime: "14:30",
          endTime: "16:15",
          opponent: "DHSC VR1",
          home: true,

          userId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Match", // FC Delta Sports '95 VR1 - EDO VR1
          descr: "",
          date: new Date("2022-10-08"),
          startTime: "14:30",
          endTime: "16:15",
          opponent: "FC Delta Sports '95 VR1",
          home: false,

          userId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sailing on the Utrecht canals + BBQ",
          descr:
            "Be there around 15.45, sailing starts 16:00. We finish with a BBQ @ the EDO canteen. ",
          date: new Date("2023-09-24"),
          startTime: "15:45",
          endTime: "23:59",
          opponent: null,
          home: null,

          userId: 1,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Training camp, Portugal",
          descr: "Jan 14th - Jan 18th, flight times will follow later",
          date: new Date("2023-01-14"),
          startTime: "4:30",
          endTime: "4:31",
          opponent: null,
          home: null,

          userId: 1,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("events", null, {});
  },
};
