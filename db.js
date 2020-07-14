const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

// sequelize
//   .authenticate()
//   .then(() => console.log("postgres database is connected"))
//   .catch((err) => console.log(err));

sequelize.authenticate().then(
  function () {
    console.log("Connected to the server");
  },
  function (err) {
    console.log(err);
  }
);

//DB Associations
User = sequelize.import("./models/user");
Destinations = sequelize.import("./models/destination");
userLotto = sequelize.import("./models/userLotto");

// //

User.hasMany(userLotto);
userLotto.belongsTo(User);
userLotto.hasMany(Destinations);
Destinations.belongsTo(userLotto);

module.exports = sequelize;
