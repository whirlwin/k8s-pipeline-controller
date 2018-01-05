const express = require("express");

const APP_PORT = process.env.APP_PORT;

const app = express({viewEngine: "pug"});

app.set("view engine", "pug");
app.set("views", "./src/main/views");
app.use("/static", express.static("src/main/public"));

app.get("/:app", (req, res) => {
    res.render("app");
});

app.get("/healthcheck", (req, res) => {
    res.send(200);
});

app.listen(APP_PORT, () => console.log("k8s-doc-controller listening on port " + APP_PORT));
