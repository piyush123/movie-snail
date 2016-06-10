require("es6-promise").polyfill();

var path = require("path");
var fs = require("fs");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var imageSize = require("image-size");

var dataDir = __dirname + "/data/items";

var app = express();

app.use(cors());

app.use(bodyParser.json({ type: "application/json" }));

var data = {
    "ids": [],
    "by_id": {}
};

var loadData = function() {
    return new Promise(function(resolve) {
        fs.readdir(dataDir, function(err, files) {
            if (err) {
                res.status(500).send(err);
                return;
            }

            data.ids = [];
            data.by_id = {};

            var promises = [];

            files.forEach(function(file) {
                var id = file.split("\.")[0];
                data.ids.push(id);

                promises.push(new Promise(function(res, rej) {
                    fs.readFile(dataDir + "/" + id + ".json", function(err, response) {
                        if (err) {
                            reject(err);
                            return;
                        }

                        response = JSON.parse(response);

                        var posterPath = "/poster-images/" + response.id + ".jpg";
                        var posterDimensions = imageSize(__dirname + "/public" + posterPath);
                        response.poster = {
                            url: posterPath,
                            width: posterDimensions.width,
                            height: posterDimensions.height
                        };
                        res(response);
                    });
                }));
            });

            Promise.all(promises).then(function(items) {
                items.forEach(function(item) {
                    data.by_id[item.id] = item;
                });
                resolve(data);
            });
        });
    });
}

app.get("/api/movies", function(req, res) {
    res.status(200).send(data.ids);
});

app.get("/api/movies/:id", function(req, res) {
    if (!data.by_id.hasOwnProperty(req.params.id)) {
        res.status(404).send({error:"No data available"});
        return;
    }

    res.status(200).send(data.by_id[req.params.id]);
});

app.use(express.static(__dirname + "/public"));
app.use("/dist", express.static(__dirname + "/dist"));

loadData().then(function() {
    console.log("API up and running");
    app.listen(8080);
});
