module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define("destination", {
    lottoLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lottoAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Destination;
};
