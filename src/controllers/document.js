const { toPdf, toPng } = require("../utils/documentFormatter");
const fs = require("fs");

const convertToPdf = (req, res) => {
    if (req.query.url) {
        toPdf(req.query.url)
            .then(fileName => {
                res.download(fileName, () => {
                    fs.unlinkSync(fileName);
                });
            })
            .catch(err => {
                console.log(err);
                res.json({
                    fileName: null,
                    error: err
                });
            });
    } else {
        res.json({
            erro:
                "Você precisa fornecer a URL do site que deseja tranformar em PDF"
        });
    }
};

const convertToPng = (req, res) => {
    if (req.query.url) {
        toPng(req.query.url)
            .then(fileName => {
                res.download(fileName, () => {
                    fs.unlinkSync(fileName);
                });
            })
            .catch(err => {
                res.json({
                    fileName: null,
                    error: err
                });
            });
    } else {
        res.json({
            erro:
                "Você precisa fornecer a URL do site que deseja tranformar em PNG"
        });
    }
};

module.exports = {
    convertToPdf,
    convertToPng
};
