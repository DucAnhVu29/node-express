const http = require("http");
const express = require("express");

const morgan = require("morgan");

const bodyPraser = require("body-parser");

const hostname = "localhost";
const port = 5000;

const app = express();

// app.use((req, res, next) => {
//   console.log(req.headers);
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<html><body><h1>This is an Express Server</h1></body></html>");
// });

// app.use(bodyPraser.json());

// app.all("/players", (req, res, next) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   next();
// });

// app.get("/players", (req, res, next) => {
//   res.end("Will send all the players to you!");
// });

// app.post("/players", (req, res, next) => {
//   res.end(
//     "Will add the player: " +
//       req.body.name +
//       " with details: " +
//       req.body.description
//   );
// });

// app.put("/players", (req, res, next) => {
//   res.statusCode = 403;
//   res.end("PUT operation not supported on /players");
// });

// app.delete("/players", (req, res, next) => {
//   res.end("Deleting all players");
// });

// app.get("/players/:playerId", (req, res, next) => {
//   res.end(
//     "Will send details of the player: " + req.params.playerId + " to you!"
//   );
// });

// app.post("/players/:playerId", (req, res, next) => {
//   res.statusCode = 403;
//   res.end("POST operation not supported on /players/" + req.params.playerId);
// });

// app.put("/players/:playerId", (req, res, next) => {
//   res.write("Updating the player: " + req.params.playerId + "\n");
//   res.end(
//     "Will update the player: " +
//       req.body.name +
//       " with details: " +
//       req.body.description
//   );
// });

// app.delete("/players/:playerId", (req, res, next) => {
//   res.end("Deleting player: " + req.params.playerId);
// });

const playerRouter = require("./routes/playerRouter");

app.use("/players", playerRouter);

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
