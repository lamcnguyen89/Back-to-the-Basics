module.exports = function (sequelize, DataTypes) {
    var Weed = sequelize.define("weed", {
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      lat: {
        type: DataTypes.FLOAT,
      },
  
      long: {
        type: DataTypes.FLOAT,
      },
    });
    return Weed;
};