"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "userEvents",
      "isDriver",
      {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("userEvents", "isDriver", {});
  },
};
