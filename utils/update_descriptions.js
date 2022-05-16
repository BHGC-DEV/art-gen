const basePath = process.cwd();
const fs = require("fs");
const sentencer = require('sentencer');
const {
    BloodTypes,
    CommonAdjectives,
    EatingVerbs,
    FemaleNames,
    Foods,
    Genders,
    GoodVerbs,
    HatNames,
    HatProperties,
    Jobs,
    MaleNames,
    NightThings,
    NZPlaces,
    PejorativeVerbs,
    PluralNouns,
    Secrets,
    ZodiacSigns
} = require(`${basePath}/utils/BirbAdlibs/index.js`);

const {
    baseUri,
} = require(`${basePath}/src/config.js`);

let Gender =() => {
    return Math.floor( Math.random() * Genders.length );
}

let GenerateName = (gender) => {
    if(gender === 1){
        let random = Math.floor(Math.random() * MaleNames.length)
        return MaleNames[random];
    } else if (gender === 2 ) {
        let random = Math.floor(Math.random() * FemaleNames.length)
        return FemaleNames[random];
    }
    let names = MaleNames.concat(FemaleNames);
    let random = Math.floor(Math.random() * names.length)
    return names[random];
};

let GenerateDescription = (gender, name) => {
    sentencer.configure({
        actions: {
            bloodtype : function() {
                return BloodTypes[Math.floor( Math.random() * BloodTypes.length )];
            },
            commonAdjective : function() {
                return CommonAdjectives[Math.floor( Math.random() * CommonAdjectives.length )];
            },
            eatingVerb : function() {
                return EatingVerbs[Math.floor( Math.random() * EatingVerbs.length )];
            },
            food : function() {
                return Foods[Math.floor( Math.random() * Foods.length )];
            },
            goodVerb : function() {
                return GoodVerbs[Math.floor( Math.random() * GoodVerbs.length )];
            },
            hatName : function() {
                return HatNames[Math.floor( Math.random() * HatNames.length )];
            },
            hatProperty : function() {
                let list = HatProperties.concat(Secrets);
                return list[Math.floor( Math.random() * list.length )];
            },
            job : function() {
                return Jobs[Math.floor( Math.random() * Jobs.length )];
            },
            nightThing : function() {
                return NightThings[Math.floor( Math.random() * NightThings.length )];
            },
            nzPlace : function() {
                return NZPlaces[Math.floor( Math.random() * NZPlaces.length )];
            },
            pejorativeVerb : function() {
                return PejorativeVerbs[Math.floor( Math.random() * PejorativeVerbs.length )];
            },
            pluralNoun : function() {
                return PluralNouns[Math.floor( Math.random() * PluralNouns.length )];
            },
            secret : function() {
                return Secrets[Math.floor( Math.random() * Secrets.length )];
            },
            zodiacSign : function() {
                return ZodiacSigns[Math.floor( Math.random() * ZodiacSigns.length )];
            },
            initial: function (){
                return String.fromCharCode(65 + Math.random() * 27);
            }

        }
    });

    let sentence =
        "This bird is part of the Bird Hat Grift Club, a collection of utterly unique, randomly generated birds (with hats.) Every bird has its own story." +
        " This is {{name}}’s. \n\n" +
        "This bird's full name is {{name}} {{ initial }} {{ hatName }}, but everyone calls it {{name}}." +
        " {{He}} is the most {{ commonAdjective }} bird in {{ nzPlace }}. \n\n" +
        "It loves to eat {{ food }} although it will {{ eatingVerb }} nearly anything.\n\n" +
        "{{name}} is a {{ zodiacSign }} with a blood type of {{ bloodtype }} who {{ goodVerb }} {{ pluralNoun }} and {{ pluralNoun }}." +
        " However, {{name}} {{ pejorativeVerb }} {{ pluralNoun }}. By day, {{name}} is a simple {{ job }}." +
        " By night, {{he}} enjoys {{ nightThing }}. \n\n" +
        "{{name}}’s secret is that {{he}} {{ secret }}. {{He}} has a hat that {{ hatProperty }}. The hat’s name is {{ hatName }}. \n";

    let he = "it";
    let He = "It";
    let him = "it"
    let Him = "It"
    let his = "its"
    let His = "Its"
    if(gender === 1){ // M
        he = "he";
        He = "He";
        him = "him"
        Him = "Him"
        his = "his"
        His = "His"
    } else if (gender === 2){ //F
        he = "she";
        He = "She";
        him = "her"
        Him = "Her"
        his = "hers"
        His = "Hers"
    }
    sentence = sentence.replaceAll("{{name}}", name);
    sentence = sentence.replaceAll("{{he}}", he);
    sentence = sentence.replaceAll("{{He}}", He);
    sentence = sentence.replaceAll("{{him}}", him);
    sentence = sentence.replaceAll("{{Him}}", Him);
    sentence = sentence.replaceAll("{{his}}", his);
    sentence = sentence.replaceAll("{{His}}", His);


    return sentencer.make(sentence);
};

let getRating = () => {
    return Math.floor( Math.random() * 5 ) +1;
}

let updateAttributes = (item, gender) => {
    let Hat = getRating();
    let Heart = getRating();
    let Magic = getRating();
    let Size = getRating();
    let Speed = getRating();

    updateAttribute(item, "Gender", Genders[gender]);
    updateAttribute(item, "Hat", Hat);
    updateAttribute(item, "Heart", Heart);
    updateAttribute(item, "Magic", Magic);
    updateAttribute(item, "Size", Size);
    updateAttribute(item, "Speed", Speed);


    for (let i = 0; i < item.attributes.length; i++) {
        if(item.attributes[i].trait_type === "sketchy"
            && item.attributes[i].value === "not sketchy")
            item.attributes = item.attributes.filter(x=> x.trait_type !== "sketchy")
    }
}

let updateAttribute = (item, attributeName, attributeValue) => {
    item.attributes = item.attributes.filter(x=> x.trait_type !== attributeName)
    item.attributes.push({
        "trait_type": attributeName,
        "value": attributeValue
    })
}

(async () => {
    // read json data
    let rawdata = fs.readFileSync(`${basePath}/build/json/_metadata.json`);
    let data = JSON.parse(rawdata);

    console.log("Info will be updated using the config.js data.");

    data.forEach((item) => {
        let g = Gender();
        let name = GenerateName(g);
        let description = GenerateDescription(g, name);
        updateAttributes(item, g);
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
