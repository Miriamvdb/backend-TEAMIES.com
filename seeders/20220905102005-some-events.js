"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          // 0
          title: "Match",
          descr: "",
          date: new Date("2022-09-24"),
          startTime: "14:30",
          endTime: "16:15",
          opponent: "Feyenoord VR1",
          home: false,

          userId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 1
          title: "Sailing on the Utrecht canals + BBQ",
          descr:
            "Be there around 15.45, sailing starts 16:00. We finish with a BBQ @ the EDO canteen. ",
          date: new Date("2022-09-25"),
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
          // 2
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
          // 3
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
          // 4
          title: "Match",
          descr: "",
          date: new Date("2022-10-01"),
          startTime: "14:30",
          endTime: "16:15",
          opponent: "FC Utrecht VR1",
          home: true,

          userId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 5
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
          // 6
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
          // 7
          title: "Match",
          descr: "",
          date: new Date("2022-10-08"),
          startTime: "14:30",
          endTime: "16:15",
          opponent: "Ajax VR1",
          home: false,

          userId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // 8
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
