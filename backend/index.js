const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");

const config = require("./config/config")

const healthRoutes = require("./routes/health.route");
const userRoutes = require("./routes/user.route");
const memeRoutes = require("./routes/meme.route");

const app = express();

const server = http.createServer(app);

mongoose.connect(config.mongo_url)
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch(e => console.log(e));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/health", healthRoutes);
app.use("/api/users", userRoutes);
app.use("/api/memes", memeRoutes);

server.listen(config.port, () => {
    console.log(`listening on localhost:${config.port}`);
});
