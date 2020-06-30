module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    userRole: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return User;
};
