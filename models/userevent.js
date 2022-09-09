"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userEvent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Many to many
      userEvent.belongsTo(models.user);
      userEvent.belongsTo(models.event);
    }
  }
  userEvent.init(
    {
      participation: { type: DataTypes.BOOLEAN, allowNull: false },
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userEvent",
    }
  );
  return userEvent;
};
