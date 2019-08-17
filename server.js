const express = require("express");
const fs = require("fs");
const app = express();

const { toPdf } = require("./src/documentFormatter");

app.get("/pdf", (req, res) => {
    if (req.query.url) {
        toPdf(req.query.url)
            .then(fileName => {
                res.download(fileName, () => {
                    fs.unlinkSync(fileName);
                });
            })
            .catch(err =>
                res.json({
                    fileName: null,
                    error: err
                })
            );
    } else {
        res.json({
            erro:
                "Você precisa fornecer a URL do site que deseja tranformar em PDF"
        });
    }
});

app.listen(3332, () => console.log("running..."));
