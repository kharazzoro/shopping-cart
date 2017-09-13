const createPath = (title) => {
    let path = title.toLowerCase();
    path = path.split(" ").join("-");
    return path;
}

module.exports = createPath;