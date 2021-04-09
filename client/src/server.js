require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
// const config = require("../src/utils/index");
const { auth } = require("express-openid-connect");

const DIST_DIR = path.resolve("public/build/");

// port
const connUri = process.env.MONGO_URI;
let PORT = process.env.PORT || 3000;

// Creating express app
const app = express();

app.use(cors());

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: false }));
//form-urlencoded

//auth set up
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTHSECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL,
  idpLogout: true,
};

// views setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//mongoose promise -> global promise
mongoose.promise = global.Promise;
mongoose.connect(connUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB --  database connected"));
connection.on("error", (err) => {
  console.log("MongoDB connection error. " + err);
  process.exit();
});

//Configure Route
require("./routes/index")(app);
// auth routes
// app.use(auth(config));
app.use(express.static(DIST_DIR));

//catch-all for SSR
app.get("/*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () =>
  console.log("Server running on http://localhost:" + PORT + "/")
);
