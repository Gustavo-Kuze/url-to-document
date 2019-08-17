const express = require("express");
const { convertToPdf, convertToPng } = require("./src/controllers/document");
const { home } = require("./src/controllers/main");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", home);

app.get("/pdf", convertToPdf);

app.get("/png", convertToPng);

const port = 3332;
app.listen(port, () =>
    console.log(`A API está sendo executada na porta${port}...`)
);
