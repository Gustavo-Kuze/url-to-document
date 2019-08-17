const generateFileNameByUrl = (url, fileLocation, fileExtension = "") =>
    `${__dirname}${fileLocation}${new Date()
        .toLocaleTimeString()
        .replace(/[:]/, "_")}${new Date().toLocaleDateString()}${Buffer.from(
        url,
        "latin1"
    ).toString("base64")}${fileExtension}`;

module.exports = { generateFileNameByUrl };
