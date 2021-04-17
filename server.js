//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
const appPath = path.join(__dirname, "dist", "e-restaurant");
app.use(express.static(appPath));

app.use("/", (req, res) => res.sendFile(path.join(appPath, "index.html")));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
