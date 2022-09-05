"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Training",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Match",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Partytime",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
