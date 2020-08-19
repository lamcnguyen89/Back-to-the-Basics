module.exports = function (sequelize, DataTypes) {
    var Weed = sequelize.define("weed", {
      city: {
        type: Sequelize.STRING,
        // type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        // type: DataTypes.STRING,
        allowNull: false,
      },

      phone: {
        type: Sequelize.STRING,
        // type: DataTypes.STRING,
        allowNull: false,
      },
  
      lat: {
        type: Sequelize.FLOAT,
        // type: DataTypes.FLOAT,
      },
  
      long: {
        type: Sequelize.FLOAT,
        // type: DataTypes.FLOAT,
      },
    });
    return Weed;
};