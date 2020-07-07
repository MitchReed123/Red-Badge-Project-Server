// lotto number/name/lottopot
module.exports = (sequelize, DataTypes) => {
  const Lotto = sequelize.define("lotto", {
    lottoNum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameOfLotto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lottoPot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      // going to be the DB association
      type: DataTypes.STRING,
      allowNull: true,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Lotto;
};
