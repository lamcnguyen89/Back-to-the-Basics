module.exports = function (sequelize, DataTypes) {
    var StateParks = sequelize.define("state_parks", {
      site_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
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
    return StateParks;
};