const express = require("express");

const APP_PORT = process.env.APP_PORT;

const app = express({viewEngine: "pug"});

// TODO replace with persistent db
const commits = [{
    commitHash: "ab1c23",
    commitMessage: "DIG-123: Endre farge på knapp",
    environments: {
        test: {
            clusters: [{
                name: "test01.sparebank1.no",
                pods: [{
                    name: "foo-app-90cca",
                    status: "running"
                }]
            }, {
                name: "test02.sparebank1.no",
                pods: []
            }]
        },
        pilot: {
            clusters: [{
                name: "pilot01.sparebank1.no",
                pods: []
            }, {
                name: "pilot02.sparebank1.no",
                pods: []
            }]
        },
        prod: {
            clusters: [{
                name: "prod01.sparebank1.no",
                pods: []
            }, {
                name: "prod02.sparebank1.no",
                pods: []
            }]
        }
    }
}, {
    commitHash: "1bace3",
    commitMessage: "DIG-112: Legge til knapp",
    environments: {
        test: {
            clusters: [{
                name: "test01.sparebank1.no",
                pods: []
            }]
        },
        pilot: {
            clusters: [{
                name: "pilot01.sparebank1.no",
                pods: []
            }]
        },
        prod: {
            clusters: [{
                name: "prod01.sparebank1.no",
                pods: []
            }]
        }
    }
}, {
    commitHash: "c43b11",
    commitMessage: "DIG-100: Legge til tekst",
    environments: {
        test: {
            timestamp: "13-06-2018",
            clusters: [{
                name: "test01.sparebank1.no",
                pods: [{
                    name: "foo-app-ac21",
                    status: "running"
                }, {
                    name: "foo-app-29bb",
                    status: "starting"
                }]
            }, {
                name: "test02.sparebank1.no",
                pods: [{
                    name: "foo-app-ah5c",
                    status: "running"
                }, {
                    name: "foo-app-923a",
                    status: "failed"
                }]
            }]
        },
        pilot: {
            timestamp: "13-06-2018",
            clusters: [{
                name: "pilot01.sparebank1.no",
                pods: [{
                    name: "foo-app-ac21",
                    status: "running"
                }, {
                    name: "foo-app-29bb",
                    status: "starting"
                }]
            }, {
                name: "pilot02.sparebank1.no",
                pods: [{
                    name: "foo-app-ah5c",
                    status: "running"
                }, {
                    name: "foo-app-923a",
                    status: "failed"
                }]
            }]
        },
        prod: {
            timestamp: "13-06-2018",
            clusters: [{
                name: "test01.sparebank1.no",
                pods: [{
                    name: "foo-app-ac21",
                    status: "running"
                }, {
                    name: "foo-app-29bb",
                    status: "starting"
                }]
            }, {
                name: "test02.sparebank1.no",
                pods: [{
                    name: "foo-app-ah5c",
                    status: "running"
                }, {
                    name: "foo-app-923a",
                    status: "failed"
                }]
            }]
        }
    }
}];

app.set("view engine", "pug");
app.set("views", "./src/main/views");
app.use("/static", express.static("src/main/public"));

app.get("/:app", (req, res) => {
    res.render("app", {commits: commits});
});

app.get("/healthcheck", (req, res) => {
    res.send(200);
});

app.listen(APP_PORT, () => console.log("k8s-pipeline-controller listening on port " + APP_PORT));
