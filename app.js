require("dotenv").config();

const express = require("express");
const app = express();

const user = require("./controllers/userController");
const userLotto = require("./controllers/userLottoController");
const Destination = require("./controllers/destinationController");

const sequelize = require("./db");
sequelize.sync(); // to drop tables do {force: true}
app.use(express.json());
app.use(require("./middleware/headers"));

app.use("/user", user);
app.use(require("./middleware/validate-session"));
app.use("/lotto", userLotto);
app.use("/destination", Destination);

app.listen(process.env.PORT, () =>
  console.log(`app is listening on ${process.env.PORT}`)
);
