const home = (req, res) => {
    res.sendFile("index.html", { root: "./src" });
};

module.exports = {
    home
};
