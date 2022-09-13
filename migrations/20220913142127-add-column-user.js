"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "users",
      "accepted",
      {
        type: Sequelize.BOOLEAN,
      },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "accepted", {});
  },
};
