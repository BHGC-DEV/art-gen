const basePath = process.cwd();
const fs = require("fs");

const {
    baseUri,
} = require(`${basePath}/src/config.js`);

(async () => {
    // read json data
    let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
    let data = JSON.parse(rawdata);

    console.log("Info will be updated using the config.js data.");

    data.forEach((item) => {
        item.image = `${baseUri}/${item.edition}.png`;

        fs.writeFileSync(
            `${basePath}/build/json/${item.edition}`,
            JSON.stringify(item, null, 2)
        );
    });

    fs.writeFileSync(
        `${basePath}/build/json/_metadata.json`,
        JSON.stringify(data, null, 2)
    );

    console.log(`Done.`);
})()
