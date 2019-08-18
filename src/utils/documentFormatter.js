const fs = require("fs");
const { navigateAndExecute } = require("./puppeteer");

const toPdf = async url => {
    const path = "/../../PDFs";
    if (!fs.existsSync(__dirname + path)) fs.mkdirSync(__dirname + path);

    return navigateAndExecute(
        url,
        async (page, fileName) =>
            await page.pdf({ path: fileName, format: "A4" }),
        ".pdf",
        path
    );
};

const toPng = async url => {
    const path = "/../../images";
    if (!fs.existsSync(__dirname + path)) fs.mkdirSync(__dirname + path);

    return navigateAndExecute(
        url,
        async (page, fileName) => {
            await page.setViewport({
                width: 1600,
                height: 900,
                deviceScaleFactor: 1
            });
            await page.screenshot({ path: fileName, format: "A4" });
        },
        ".png",
        path
    );
};

module.exports = { toPdf, toPng };
