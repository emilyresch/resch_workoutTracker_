const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
//     useNewUrlParser: true
// });
//heroku connection w mongoose
const MONGODB_URL = process.env.MONGODB_URI || "mongodb://localhost/workouts";
// const options = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   family: 4 // Use IPv4, skip trying IPv6
// };
mongoose.connect(MONGODB_URL);

app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));


// Listen on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000!");
});