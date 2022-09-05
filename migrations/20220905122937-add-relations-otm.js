"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Relation 1
    await queryInterface.addColumn("users", "teamId", {
      type: Sequelize.INTEGER,
      references: {
        model: "teams",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    // Relation 2
    await queryInterface.addColumn("events", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("events", "userId"); // Relation 2
    await queryInterface.dropTable("users", "teamId"); // Relation 1
  },
};
