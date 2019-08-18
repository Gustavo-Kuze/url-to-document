const puppeteer = require("puppeteer");
const { generateFileNameByUrl } = require("./fileSystem");

const navigateAndExecute = async (
    url,
    action = null,
    fileExtention = "",
    fileLocation = ""
) => {
    const fileName = generateFileNameByUrl(url, fileLocation, fileExtention);

    const browser =
        process.platform === "win32"
            ? await puppeteer.launch()
            : await puppeteer.launch({
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

module.exports = {
    navigateAndExecute
};
