const express = require("express");
const logger = require("morgan");
const mongoose =require("mongoose");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(logger("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

//heroku connection with mongoose
const MONGODB_URL = process.env.MONGODB_URI || "mongodb://localhost/workouts";
mongoose.connect(MONGODB_URL);

app.use(apiRoutes);
app.use(htmlRoutes);

//listening on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000");
});