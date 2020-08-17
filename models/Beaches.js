module.exports = function (sequelize, DataTypes) {
    var Beaches = sequelize.define("Death", {
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
    return Beaches;
};