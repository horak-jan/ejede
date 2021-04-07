const path = require("path");
const INDEX = path.resolve("public/build/index.html");
const { auth } = require("express-openid-connect");
const { requiresAuth } = require("express-openid-connect");

// const user = require("./user");
const booking = require("./booking");
const car = require("./car");
const message = require("./message");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(INDEX);
  });

  app.use("/api/car", car);
  app.use("/api/booking", booking);
  app.use("/api/message", message);

  // app.get("/admin", requiresAuth(), (req, res) =>
  //   res.send(`Hello ${req.oidc.user.sub}, this is the admin section.`)
  // );
};
