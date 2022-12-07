const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://127.0.0.1:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//db connection
const db = require("./models");
db.sequelize.sync();

//development mode
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to todo backend." });
});

require("./routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
