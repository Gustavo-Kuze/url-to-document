const generateFileNameByUrl = (url, fileLocation, fileExtension = "") =>
    `${__dirname}${fileLocation}/${new Date()
        .toLocaleTimeString()
        .replace(/[:|\s]/g, "_")}${new Date()
        .toLocaleDateString()
        .replace(/[/]/g, "")}${Buffer.from(url, "latin1").toString(
        "base64"
    )}${fileExtension}`;

module.exports = { generateFileNameByUrl };
