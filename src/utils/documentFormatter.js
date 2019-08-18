const puppeteer = require("puppeteer");
const { generateFileNameByUrl } = require("./fileSystem");
const fs = require("fs");

const toPdf = async url => {
    const path = "/../../PDFs";
    if (!fs.existsSync(__dirname + path)) fs.mkdirSync(__dirname + path);

    return _navigateAndExecute(
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

    return _navigateAndExecute(
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

const _navigateAndExecute = async (
    url,
    action = null,
    fileExtention = "",
    fileLocation = ""
) => {
    const fileName = generateFileNameByUrl(url, fileLocation, fileExtention);

    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    if (action) {
        await action(page, fileName);
    }

    await browser.close();

    return fileName;
};

module.exports = { toPdf, toPng };
