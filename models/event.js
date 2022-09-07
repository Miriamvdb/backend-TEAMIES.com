"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      event.belongsTo(models.user, { foreignKey: "userId", as: "organizer" });
      event.belongsTo(models.category, { foreignKey: "categoryId" });

      // Many to many
      event.belongsToMany(models.user, {
        through: "userEvents",
        foreignKey: "eventId",
        as: "attendees",
      });
    }
  }
  event.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      descr: DataTypes.STRING,
      date: { type: DataTypes.DATE, allowNull: false },
      startTime: { type: DataTypes.TIME, allowNull: false },
      endTime: { type: DataTypes.TIME, allowNull: false },
      opponent: DataTypes.STRING,
      home: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
