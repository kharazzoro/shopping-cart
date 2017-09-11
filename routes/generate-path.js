var generatePath = (title) => {
    path = title.toLowerCase();
    path = path.split(" ").join("-");
    return path;
}

module.exports = { generatePath }