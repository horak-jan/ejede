const path = require("path");
const INDEX = path.resolve("public/build/index.html");
const { auth } = require("express-openid-connect");
const { requiresAuth } = require("express-openid-connect");

// const user = require("./user");
const house = require("./house");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(INDEX);
    // res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
  });

  //protected routes
  app.get("/profile", requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });

  // app.use('/api/auth', auth);
  // app.use("/api/user", auth, user);
  app.use("/api/house", house);
  app.get("/admin", requiresAuth(), (req, res) =>
    res.send(`Hello ${req.oidc.user.sub}, this is the admin section.`)
  );
};
