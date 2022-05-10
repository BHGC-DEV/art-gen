const basePath = process.cwd();
const fs = require("fs");
const sentencer = require('sentencer');
const mNames = require( '@stdlib/datasets-male-first-names-en' );
const fNames = require( '@stdlib/datasets-female-first-names-en' );

const {
    baseUri,
} = require(`${basePath}/src/config.js`);

let Gender =() => {
    let random = Math.floor(Math.random() * 100)
    if(random > 50)
        return "M"
    return "F"
}

let GenerateName = (gender) => {
    if(gender === "M"){
        let random = Math.floor(Math.random() * mNames().length)
        return mNames()[random];
    } else {
        let random = Math.floor(Math.random() * fNames().length)
        return fNames()[random];
    }
};

let GenerateDescription = (gender, name) => {
    let sentences = [
        "{{name}} is the {{ adjective }} Bird of all. It has {{ an_adjective }} {{ nouns }}, and a {{ noun }} shaped like a {{ noun }}. It loves to eat {{ nouns }}, although it will feast on nearly anything. It is {{ adjective }} and {{ adjective }}. You must be {{ adjective }} around it, or you may end up as it`s meal!",
        "This is an NFT of {{name}}, an original painting of a {{ adjective }} New Zealand {{ noun }}. {{He}} goes by {{name}} but {{his}} full name is {{name}} {{adjective}} {{noun}}. {{His}} blood type is {{noun}}. {{He}} is {{ an_adjective }}, but disdains {{ noun }} as \"not particularly useful for birds.\" {{He}} has a secret {{he}} can never tell, and a {{ noun }} {{he}} can never remove. During the day, {{name}} {{ adjective }} from branch to branch in the forest, {{ adjective }} up a {{ adjective }} with {{his}} {{ adjective }} {{ nouns }} and {{ adjective }} {{ noun }}. {{He}}'s the {{ adjective }} {{ noun }} in town. By night, {{he}} organizes {{ adjective }} {{ nouns }}. Sometimes, {{he}} {{ adjective }} at the {{ noun }}. {{name}}'s mission in life is to repay {{his}} Creator's mortgage in full. Once this {{ adjective }} service is performed, {{he}} will {{ adjective }} into the sun, {{ adjective }} at last."
    ]

    let random = Math.floor(Math.random() * sentences.length)
    var sentence = sentences[random];

    sentence = sentence.replaceAll("{{name}}", name);
    let he = "he";
    let He = "He";
    let His = "His";
    let his = "his";
    if(gender === "F"){
        he = "she";
        He = "She";
        His = "Her";
        his = "her";
    }
    sentence = sentence.replaceAll("{{name}}", name);
    sentence = sentence.replaceAll("{{he}}", he);
    sentence = sentence.replaceAll("{{He}}", He);
    sentence = sentence.replaceAll("{{His}}", His);
    sentence = sentence.replaceAll("{{his}}", his);


    return sentencer.make(sentence);
};


(async () => {
    // read json data
    let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
    let data = JSON.parse(rawdata);

    console.log("Info will be updated using the config.js data.");

    data.forEach((item) => {
        let g = Gender();
        let name = GenerateName(g);
        let description = GenerateDescription(g, name);
        item.name = name;
        item.description = description;
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
