const express = require("express");

const APP_PORT = process.env.APP_PORT;

const app = express({viewEngine: "pug"});

// TODO replace with persistent db
var commits = require("./commits.json");
//var commits = [];

app.set("view engine", "pug");
app.set("views", "./src/main/views");
app.use("/static", express.static("src/main/public"));

app.get("api/commit/register", (req, res) => {

});

app.get("/:app", (req, res) => {
    //commits = [];
    res.render("app", {commits: commits});
});

app.get("/healthcheck", (req, res) => {
    res.send(200);
});

app.listen(APP_PORT, () => console.log("k8s-pipeline-controller listening on port " + APP_PORT));
