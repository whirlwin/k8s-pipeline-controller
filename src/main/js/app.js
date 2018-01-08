const express = require("express");

const APP_PORT = process.env.APP_PORT;

const app = express({viewEngine: "pug"});

// TODO replace with persistent db
const fooAppDeploys = [
    {
        commitHash: "ab1c23",
        commitMessage: "DIG-123: Endre farge på knapp",
        status: "not-deployed",
        deploy: null
    },
    {
        commitHash: "1bace3",
        commitMessage: "DIG-112: Legge til knapp",
        status: "not-deployed",
        deploy: null
    },
    {
        commitHash: "c43b11",
        commitMessage: "DIG-100: Legge til tekst",
        status: "deployed",
        deploy: {
            timestamp: "13-06-2018",
            destinations: [
              {
                clusterName: "prod01.sparebank1.no",
                pods: [
                  {
                    name: "foo-app-ac21",
                    status: "running"
                  },
                  {
                    name: "foo-app-29bb",
                    status: "starting"
                  }
                ]

              },
              {
                clusterName: "prod02.sparebank1.no",
                pods: [
                  {
                    name: "foo-app-ah5c",
                    status: "running"
                  },
                  {
                    name: "foo-app-923a",
                    status: "failed"
                  }
                ]

              }
            ],
        }
    }
];

app.set("view engine", "pug");
app.set("views", "./src/main/views");
app.use("/static", express.static("src/main/public"));

app.get("/:app", (req, res) => {
    res.render("app", {fooAppDeploys: fooAppDeploys});
});

app.get("/healthcheck", (req, res) => {
    res.send(200);
});

app.listen(APP_PORT, () => console.log("k8s-doc-controller listening on port " + APP_PORT));
