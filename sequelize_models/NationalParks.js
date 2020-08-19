module.exports = function (sequelize, DataTypes) {
    var NationalParks = sequelize.define("national_parks", {
      site_name: {
        type: Sequelize.STRING,
        // type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
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
    return NationalParks;
};