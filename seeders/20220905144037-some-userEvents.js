"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert(
    //   "userEvents",
    //   [
    //     // user 1
    //     {
    //       participation: true,
    //       userId: 1,
    //       eventId: 1,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       participation: false,
    //       userId: 1,
    //       eventId: 2,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       participation: false,
    //       userId: 1,
    //       eventId: 3,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       participation: true,
    //       userId: 1,
    //       eventId: 4,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     // user 2
    //     {
    //       participation: false,
    //       userId: 2,
    //       eventId: 1,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       participation: false,
    //       userId: 2,
    //       eventId: 2,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       participation: true,
    //       userId: 2,
    //       eventId: 3,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       participation: true,
    //       userId: 2,
    //       eventId: 4,
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // );
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete("userEvents", null, {});
  },
};
