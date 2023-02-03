const express = require("express");
const db = require("./utils/database");
require("./models");
const apiRoutes = require("./routes");

const app = express();

db.authenticate()
  .then(() => console.log("Database conected succesufully"))
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log("database synced succesufully"))
  .catch((error) => console.log(error));
apiRoutes(app);

module.exports = app;
