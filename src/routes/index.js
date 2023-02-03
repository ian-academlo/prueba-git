const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);

const files = fs
  .readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  );

let routes = {};

files.forEach((file) => {
  const route = require(path.join(__dirname, file));
  routes[file.substring(0, file.indexOf(".")) + "Routes"] = route;
});

const apiRoutes = (app) => {
  Object.keys(routes).forEach((route) => {
    app.use("/api/v1", routes[route]);
  });
};

module.exports = apiRoutes;
