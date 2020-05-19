const path = require("path");
const router = require("express").Router();


    // router.get("/", (req, res) => {
    //     console.log("get request for homepage")
    //     res.sendFile(path.join(__dirname, "../public/index.html"));
    // });

    router.get("/stats", (req, res) => {
        console.log("get request for stats")
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    router.get("/exercise", (req, res) => {
        console.log("get request for exercises")
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

module.exports = router;