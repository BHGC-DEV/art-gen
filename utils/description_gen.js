const basePath = process.cwd();
const sentencer = require('sentencer');
const {
    BloodTypes,
    CommonAdjectives,
    EatingVerbs,
    FemaleNames,
    Foods,
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
    ZodiacSigns,
    Nicknames,
    Genders,
    SingularPronouns,
    ObjectivePronouns,
    PossessivePronouns
} = require(`${basePath}/utils/BirbAdlibs/index.js`);


let getRating = () => {
    return Math.floor( Math.random() * 8 ) +1;
}

let UpdateAttributes = (item, gender, blood, zodiac, job, habitat) => {
    let Hat = getRating();
    let Heart = getRating();
    let Magic = getRating();
    let Size = getRating();
    let Speed = getRating();

    updateAttribute(item, "Gender", Genders[gender-1]);
    updateAttribute(item, "Hat", Hat);
    updateAttribute(item, "Heart", Heart);
    updateAttribute(item, "Magic", Magic);
    updateAttribute(item, "Size", Size);
    updateAttribute(item, "Speed", Speed);

    updateAttribute(item, "Blood Type", blood);
    updateAttribute(item, "Zodiac", zodiac);
    updateAttribute(item, "Job", job);
    updateAttribute(item, "Habitat", habitat);


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



let GenerateGender =() => {
    return 1 + Math.floor( Math.random() * Genders.length );
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

let GetBloodType = () => BloodTypes[Math.floor( Math.random() * BloodTypes.length )];
let GetNZPlace = () => NZPlaces[Math.floor( Math.random() * NZPlaces.length )];
let GetZodiac = () => ZodiacSigns[Math.floor( Math.random() * ZodiacSigns.length )];
let GetJob = () => Jobs[Math.floor( Math.random() * Jobs.length )];

let GenerateDescription = (item, gender, name) => {
    sentencer.configure({
        actions: {
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
            nightThing : function() {
                return NightThings[Math.floor( Math.random() * NightThings.length )];
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
            initial: function (){
                return String.fromCharCode(65 + Math.random() * 27);
            },
            nickname: function (){
                return Nicknames[Math.floor( Math.random() * Nicknames.length)];
            }

        }
    });

    let sentence =
        "This bird is called {{name}}. It is part of the Bird Hat Grift Club, a collection of utterly unique, randomly generated birds (with hats.) Every bird has its own story. \n\n" +
        "This bird's full name is {{name}} {{ initial }}. {{ hatName }}, but {{his}} best friends call {{him}} by {{his}} {{ commonAdjective }} nickname, {{ nickname }}. " +
        "{{He}} is the most {{ commonAdjective }} bird in {{habitat}}. \n\n" +
        "{{name}} loves to eat {{ food }}, although {{he}} will {{ eatingVerb }} nearly anything that it considers sufficiently {{ commonAdjective }}. \n\n" +
        "{{name}}’s star sign is {{zodiac}}, and {{his}} blood type is {{bloodtype}}. This bird {{ goodVerb }} {{ pluralNoun }} and {{ pluralNoun }}." +
        " However, {{name}} {{ pejorativeVerb }} {{ pluralNoun }}. By day, {{name}} works as a simple {{job}}." +
        " By night, {{he}} enjoys {{ nightThing }}. \n\n" +
        "{{name}}’s secret is that {{he}} {{ secret }}. {{He}} has a hat that {{ hatProperty }}. The hat’s name is {{ hatName }}."

    let He = SingularPronouns[gender-1];
    let Him = ObjectivePronouns[gender-1]
    let His = PossessivePronouns[gender-1]

    let zodiac = GetZodiac();
    let bloodType = GetBloodType();
    let job = GetJob();
    let habitat = GetNZPlace();

    sentence = sentence.replaceAll("{{name}}", name);
    sentence = sentence.replaceAll("{{he}}",  He.toLowerCase());
    sentence = sentence.replaceAll("{{He}}",  He);
    sentence = sentence.replaceAll("{{him}}", Him.toLowerCase());
    sentence = sentence.replaceAll("{{Him}}", Him);
    sentence = sentence.replaceAll("{{his}}", His.toLowerCase());
    sentence = sentence.replaceAll("{{His}}", His);

    sentence = sentence.replaceAll("{{zodiac}}", zodiac);
    sentence = sentence.replaceAll("{{bloodtype}}", bloodType);
    sentence = sentence.replaceAll("{{job}}", job);
    sentence = sentence.replaceAll("{{habitat}}", habitat);

    sentence =  sentencer.make(sentence);

    UpdateAttributes(item, gender, bloodType, zodiac, job, habitat);

    return sentence;
};


module.exports = {
    GenerateGender,
    GenerateName,
    GenerateDescription
}