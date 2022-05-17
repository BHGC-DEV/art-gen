const basePath = process.cwd();
const fs = require("fs");

const {
    baseUri,
} = require(`${basePath}/src/config.js`);

const {
    GenerateGender,
    GenerateName,
    GenerateDescription,
    UpdateAttributes
} = require(`${basePath}/utils/description_gen.js`);


(async () => {
    // read json data
    let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
    let data = JSON.parse(rawdata);

    console.log("Info will be updated using the config.js data.");

    data.forEach((item) => {
        let g = GenerateGender();
        let name = GenerateName(g);
        item.name = name;
        item.description =  GenerateDescription(item, g, name);

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
