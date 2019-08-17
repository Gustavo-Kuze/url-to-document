const puppeteer = require("puppeteer");

const toPdf = async url => {
    const fileName = `${__dirname}/../PDFs/${new Date()
        .toLocaleTimeString()
        .replace(/[:]/, "_")}${new Date().toLocaleDateString()}${Buffer.from(
        url,
        "latin1"
    ).toString("base64")}.pdf`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.pdf({ path: fileName, format: "A4" });

    await browser.close();

    return fileName;
};

module.exports = { toPdf };
